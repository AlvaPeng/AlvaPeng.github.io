var r = 12; //圆点半径
var active = false; //圆点 flag
var first_time = true; // 初次 flag

var dot_col = [300,680];
var dot_margin = [300,840];

var struct = [3,3]; // 网络架构

var data = new Array() //data
var dot_row = new Array();

calcuData()

function calcuData(){
    data.length = 0;
    dot_row.length = 0;
    var col_num = struct.length;

    for(let i = 0; i < col_num ; i++){
        dot_row[i] = new Array();
        for(let j = 0; j < struct[i]; j++){
            dot_row[i].push(dot_margin[0] + ((dot_margin[1] - dot_margin[0])/(struct[i]+1))*(j+1))
        }
    }

    var line_sum = dot_row[0].length * dot_row[1].length;

    for(let i = 0; i < dot_row[0].length; i++){
        for(let j = 0; j < dot_row[1].length; j++){
            temp = new Array();
            temp.push(dot_col[0]);
            temp.push(dot_row[0][i]);
            temp.push(dot_col[1]);
            temp.push(dot_row[1][j]);
            temp.push(i);
            temp.push(j);
            data.push(temp)
        }
    }
}

// initial svg
var svg_curve = d3.select("#curve-test")
            .append("svg")
            .attr("width",800)
            .attr("height",800)

// initial tooltip
var ToolTip = d3.select("#curve-test")
                .append("div")
                .style("opacity",0)
                .style("background-color","white")
                .style("border", "solid")
                .style("border-width", "3px")
                .style("border-radius", "30px")
                .style("padding", "10px")
                .style("position","absolute")

function reConstruct(){
    svg_curve.selectAll("path").remove()
    svg_curve.selectAll(".dot").remove()
    calcuData()
    construct()
}

if(first_time) {
    first_time = false;
    construct()
}

constructBt()

function construct(){
    // 显示的连线
    svg_curve.selectAll(".curve")
        .data(data)
        .enter()
        .append("path")
        .attr("id",function(d,i){return "path"+ (d[4]+1) + (d[5]+1)})
        .attr("stroke-dasharray","15,4")
        .attr("stroke-width",1.5)
        .style("stroke","#ccc")
        .style("fill","none")
        .attr("d",function(d){
            return "M " + d[0] +" "+ d[1]
            + " C " + (d[2]-170) +" "+ d[1] + ","
            + (d[0]+170) +" "+ d[3] + ","
            + d[2] +" "+ d[3]
        })

    // 鼠标的感应范围
    svg_curve.selectAll(".shadows")
        .data(data)
        .enter()
        .append("path")
        .attr("id",function(d,i){return "curve "+ (d[4]+1) +","+ (d[5]+1)})
        .attr("stroke-width","20px")
        .style("stroke","rgba(255,255,255,0)")
        .style("fill","none")
        .attr("d",function(d){
            return "M " + d[0] +" "+ d[1]
            + " C " + (d[2]-170) +" "+ d[1] + ","
            + (d[0]+170) +" "+ d[3] + ","
            + d[2] +" "+ d[3]
        })
        .on("mouseover",onCurveMouseOver)
        .on("mousemove",onCurveMouseMove)
        .on("mouseout",onCurveMouseOut)


    for(let i = 0; i < 2; i++){
        for(let j = 0; j < struct[i]; j++){
            svg_curve.append("circle")
                .attr("class","dot")
                .attr("cx",dot_col[i])
                .attr("cy",dot_row[i][j])
                .attr("col_num",i+1)
                .attr("row_num",j+1)
                .attr("active",1)
        }
    }

    svg_curve.selectAll(".dot")
        .attr("r",r)
        .style("fill","black")
        .on("mouseover",onDotMouseOver)
        .on("click",onDotClicked)
        .on("mouseout",onDotMouseOut)
}



function constructBt(){
    // 添加按鈕 +1
    svg_curve.append("g")
        .attr("id","AddBt1")
        .attr("class","AddBt")
        .attr("transform","translate(" + (dot_col[0]-25) + ",300)")

    // 添加按鈕 +2
    svg_curve.append("g")
        .attr("id","AddBt2")
        .attr("class","AddBt")
        .attr("transform","translate(" + (dot_col[1]-25) + ",300)")

    d3.selectAll(".AddBt")
        .append("circle")
        .attr("class","Bg")
        .attr("cx",5)
        .attr("cy",5)
        .attr("fill","#f1f1f1")
        .attr("r",13)

    d3.selectAll(".AddBt")
        .append("line")
        .style("stroke","black")
        .style("stroke-width",1.5)
        .attr("x1",5)
        .attr("y1",-3)
        .attr("x2",5)
        .attr("y2",13)

    d3.selectAll(".AddBt")
        .append("line")
        .style("stroke","black")
        .style("stroke-width",1.5)
        .attr("x1",-3)
        .attr("y1",5)
        .attr("x2",13)
        .attr("y2",5)

    // 删除按钮 -1
    svg_curve.append("g")
        .attr("transform","translate(" + (dot_col[0]+15) +",300)")
        .attr("id","SubBt1")
        .attr("class","SubBt")

    svg_curve.append("g")
        .attr("transform","translate(" + (dot_col[1]+15) +",300)")
        .attr("id","SubBt2")
        .attr("class","SubBt")

    d3.selectAll(".SubBt")
        .append("circle")
        .attr("class","Bg")
        .attr("cx",5)
        .attr("cy",5)
        .attr("fill","#f1f1f1")
        .attr("r",13)

    d3.selectAll(".SubBt")
        .append("line")
        .style("stroke","black")
        .style("stroke-width",1.5)
        .attr("x1",-3)
        .attr("y1",5)
        .attr("x2",13)
        .attr("y2",5)

    d3.selectAll(".AddBt")
        .on("mouseover", onButtonMouseOver)
        .on("mouseout", onButtonMouseOut)

    d3.selectAll(".SubBt")
        .on("mouseover", onButtonMouseOver)
        .on("mouseout", onButtonMouseOut)

    d3.select("#AddBt1")
        .on("click",function(){
            struct[0] +=1;
            reConstruct();
        })

    d3.select("#AddBt2")
        .on("click",function(){
            struct[1] +=1;
            reConstruct();
        })

    d3.select("#SubBt1")
        .on("click",function(){
            if(struct[0]>1){
                struct[0] -=1;
                reConstruct();
            }
        })

    d3.select("#SubBt2")
        .on("click",function(){
            if(struct[1]>1){
                struct[1] -=1;
                reConstruct();
            }
        })

}

function onButtonMouseOver(){
    d3.select(this)
        .style("cursor","pointer")
        .select(".Bg")
        .transition()
        .duration(100)
        .attr("fill","#adadad")
}

function onButtonMouseOut() {
    d3.select(this)
        .select(".Bg")
        .transition()
        .duration(50)
        .attr("fill","#f1f1f1")
}

function onCurveMouseOver(){
    ToolTip.style("opacity",1)

    d3.select(this)
        .style("cursor","pointer")
}

function onCurveMouseMove() {
    ToolTip.html("this is "+ d3.select(this).attr("id"))
            .style("left", (d3.event.pageX + 20) + "px")
            .style("top", (d3.event.pageY - 20) + "px")
}

function onCurveMouseOut() {
    ToolTip.style("opacity",0)
}

function onDotMouseOver(){
    d3.select(this)
        .transition()
        .duration(100)
        .style("fill","#454545")
        .style("cursor","pointer")
}

function onDotClicked(){
    flag = d3.select(this).attr("active")

    col_num = d3.select(this).attr("col_num")
    row_num = d3.select(this).attr("row_num")

    console.log(row_num);

    if(flag == 1){
        for(let i = 0; i < struct[1]+1; i++){
            svg_curve.select("#path"+ row_num + i)
                .transition()
                .duration(1000000)
                .ease(d3.easeLinear)
                .attrTween("stroke-dashoffset",function(){
                    return d3.interpolate(100000,0);
                })
        }
        d3.select(this).attr("active",0);
    }
    else{
        for(let i = 0; i < struct[1]+1; i++){
            svg_curve.select("#path"+ row_num + i)
                .transition()
                .duration(0)
        }
        d3.select(this).attr("active",1);
    }

}

function onDotMouseOut(){
    d3.select(this)
        .style("fill","black")
}
