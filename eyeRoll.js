init()

function init(){
    let svg = d3.select('#eye_roll')
                .append('svg')
                .attr('width',50)
                .attr('height',100)

    svg.append('image')
        .attr('xlink:href', `paperclip.png`)
        .attr('width', 50)
        .attr('height', 100)

    const left_eye_pos = [12,42]
    const right_eye_pos = [38,39]
    const dom_pos = [200,300]
    const r = 10

    let left_eye = svg.append('g')
    .attr('transform',`translate(${left_eye_pos})`)

    let right_eye = svg.append('g')
    .attr('transform',`translate(${right_eye_pos})`)

    let left_eyeball = left_eye.append('circle')
    .attr('r',r)
    .style('stroke','#1a1a1a')
    .style('stroke-width',1)
    .style('fill','#f2f2f2')

    let left_pupil = left_eye.append('circle')
    .attr('r',4)
    .style('fill','#1a1a1a')

    let right_eyeball = right_eye.append('circle')
    .attr('r',r)
    .style('stroke','#1a1a1a')
    .style('stroke-width',1)
    .style('fill','#f2f2f2')

    let right_pupil = right_eye.append('circle')
    .attr('r',4)
    .style('fill','#1a1a1a')

    document.addEventListener('mousemove',onMouseMove)

    function onMouseMove() {
        const mouse_pos = [event.clientX, event.clientY];
        
        const rel_mouse_left = [ mouse_pos[0] - left_eye_pos[0] - dom_pos[0], mouse_pos[1] - left_eye_pos[1] - dom_pos[1]]
        const rel_mouse_right = [ mouse_pos[0] - right_eye_pos[0] - dom_pos[0], mouse_pos[1] - right_eye_pos[1] - dom_pos[1]]

        const length_left = Math.pow(Math.pow(rel_mouse_left[0],2) +  Math.pow(rel_mouse_left[1],2), 0.5)
        const length_right = Math.pow(Math.pow(rel_mouse_right[0],2) +  Math.pow(rel_mouse_right[1],2), 0.5)

        const norm_rel_mouse_left = [ rel_mouse_left[0] / length_left * 4, rel_mouse_left[1] / length_left * 4]
        const norm_rel_mouse_right = [ rel_mouse_right[0] / length_right * 4, rel_mouse_right[1] / length_right * 4]

        left_pupil.attr('transform',`translate(${norm_rel_mouse_left})`)
        right_pupil.attr('transform',`translate(${norm_rel_mouse_right})`)
    }
}