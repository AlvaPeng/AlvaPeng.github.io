import React from 'react';
import ReactDOM from 'react-dom/client';
import {useRef, useEffect} from 'react';
import './index.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

  function Birthday() {
    const birthdayContainerRef = useRef(null);
    const birthdayHeadRef = useRef(null);
    const birthdayTextRef = useRef(null);

    useEffect(() => {
      const birthdayContainer = birthdayContainerRef.current;
      const birthdayHead = birthdayHeadRef.current;
      const birthdayText = birthdayTextRef.current;

      gsap.fromTo(birthdayContainer, {scaleY:0}, {scaleY:1, duration:0.3, delay:0.3, scrollTrigger:{
        trigger:birthdayContainer
      }})
      gsap.fromTo(birthdayHead, {scale:0}, {scale:1, duration:0.3, delay:0.5, ease:'circ',scrollTrigger:{
        trigger:birthdayContainer
      }})
      gsap.fromTo(birthdayText, {scale:0}, {scale:1, duration: 0.3, delay:0.5, scrollTrigger:{
        trigger:birthdayContainer
      }})
    }, [])

    return(
      <div ref={birthdayContainerRef} className="birthday-container div-center">
        <img ref={birthdayHeadRef} className="birthday-head" src={require('./assets/birthday/birthday_fluffy.png')} />
        <img ref={birthdayTextRef} className="birthday-text" src={require('./assets/birthday/fluffy_name.png')} />
      </div>
    )
  }

  function Footer() {
    const iconDiscord = require('./assets/button_discord.png')
    const iconFacebook = require('./assets/button_facebook.png')
    const iconInstagram = require('./assets/button_instagram.png')
    const iconTwitter = require('./assets/button_twitter.png')
    const iconYoutube = require('./assets/button_youtube.png')

    return(
      <div className="footer">
        <div className="footer-title">
          follow us!
        </div>
        <div className="contacts-container div-center">
          <img alt='discord' src={iconDiscord} />
          <img alt='facebook' src={iconFacebook} />
          <img alt='instagram' src={iconInstagram} />
          <img alt='twitter' src={iconTwitter} />
          <img alt='youtube' src={iconYoutube} />
        </div>
        <div className="footer-notes">
          <div>
            Privacy Policy  |  Terms of Usage
          </div>
          <div>
            © 2022 Nice Stick Technology Limited
          </div>
        </div>
      </div>
    )
  }
  function Sounds() {
    const icon808 = require('./assets/instruments/icon_808.png')
    const iconBass = require('./assets/instruments/icon_bass.png')
    const iconBirdie = require('./assets/instruments/icon_birdie.png')
    const iconClarinet = require('./assets/instruments/icon_clarinet.png')
    const iconDrumSet = require('./assets/instruments/icon_drum_set.png')
    const iconGuitar = require('./assets/instruments/icon_guitar.png')
    const iconGuzheng = require('./assets/instruments/icon_guzheng.png')
    const iconKinderDrums = require('./assets/instruments/icon_kinder_drums.png')
    const iconMarimba = require('./assets/instruments/icon_marimba.png')
    const iconMelodica = require('./assets/instruments/icon_melodica.png')
    const iconPiano = require('./assets/instruments/icon_piano.png')
    const iconRecorder = require('./assets/instruments/icon_recorder.png')
    const iconSaw = require('./assets/instruments/icon_saw.png')
    const iconSawBass = require('./assets/instruments/icon_saw_bass.png')
    const iconSquare = require('./assets/instruments/icon_square.png')
    const iconSquareBass = require('./assets/instruments/icon_square_bass.png')
    const iconSummer = require('./assets/instruments/icon_summer.png')
    const iconViolin = require('./assets/instruments/icon_violin.png')
    return(
      <div className="div-center">
      <div className="sounds-container">
        <div className="items-title">
          with various instruments
        </div>
        <div>
        <img alt="808" src={icon808} />
        <img alt="bass" src={iconBass} />
        <img alt="birdie" src={iconBirdie} />
        <img alt="clarinet" src={iconClarinet} />
        <img alt="drum_set" src={iconDrumSet} />
        <img alt="violin" src={iconViolin} />
        <img alt="guzheng" src={iconGuzheng} />
        <img alt="kinder_drums" src={iconKinderDrums} />
        <img alt="marimba" src={iconMarimba} />
        <img alt="melodica" src={iconMelodica} />
        <img alt="piano" src={iconPiano} />
        <img alt="recorder" src={iconRecorder} />
        <img alt="saw" src={iconSaw} />
        <img alt="saw_bass" src={iconSawBass} />
        <img alt="square" src={iconSquare} />
        <img alt="summer" src={iconSummer} />
        </div>
        <div className="items-title">
          and more...
        </div>
      </div>
    </div>
    )
  }

  function Characters() {
    const avatarChirpie = require('./assets/characters/avatar_chirpie.png')
    const avatarDali = require('./assets/characters/avatar_dali.png')
    const avatarDonut = require('./assets/characters/avatar_donut.png')
    const avatarEchoDelay = require('./assets/characters/avatar_echo&delay.png')
    const avatarFann = require('./assets/characters/avatar_fann.png')
    const avatarFluffy = require('./assets/characters/avatar_fluffy.png')
    const avatarFuyu = require('./assets/characters/avatar_fuyu.png')
    const avatarKarl = require('./assets/characters/avatar_karl.png')
    const avatarLulu = require('./assets/characters/avatar_lulu.png')
    const avatarMaggie = require('./assets/characters/avatar_maggie.png')
    const avatarMarsh = require('./assets/characters/avatar_marsh.png')
    const avatarPisces = require('./assets/characters/avatar_pisces.png')
    const avatarRappit = require('./assets/characters/avatar_rappit.png')
    const avatarSandy = require('./assets/characters/avatar_sandy.png')
    const avatarShojo = require('./assets/characters/avatar_shojo.png')
    const avatarSpike = require('./assets/characters/avatar_spike.png')
    const avatarWako = require('./assets/characters/avatar_wako.png')

  return(
    <div className="div-center">
      <div className="character-container">
        <div className="items-title">
          with animals play your music
        </div>
        <div>
        <img alt="chirpie" src={avatarChirpie} />
        <img alt="dali" src={avatarDali} />
        <img alt="donut" src={avatarDonut} />
        <img alt="echo_delay" src={avatarEchoDelay} />
        <img alt="fann" src={avatarFann} />
        <img alt="fluffy" src={avatarFluffy} />
        <img alt="fuyu" src={avatarFuyu} />
        <img alt="karl" src={avatarKarl} />
        <img alt="lulu" src={avatarLulu} />
        <img alt="maggie" src={avatarMaggie} />
        <img alt="marsh" src={avatarMarsh} />
        <img alt="pisces" src={avatarPisces} />
        <img alt="rappit" src={avatarRappit} />
        <img alt="sandy" src={avatarSandy} />
        <img alt="shojo" src={avatarShojo} />
        <img alt="spike" src={avatarSpike} />
        </div>
        <div className="items-title">
          and more...
        </div>
      </div>
    </div>
  )
  }

  function FeatureMidi(props) {
    const titleRef = useRef(null);
    const notionRef = useRef(null);
    const padRef = useRef(null);

    useEffect(() => {
      const midiTitle = titleRef.current;
      const midiNotion = notionRef.current;
      const pad = padRef.current;

      gsap.fromTo(midiTitle, {opacity:0, y:50}, {opacity:1, y:0, duration:0.6, scrollTrigger:{
        trigger:midiTitle
      }})
      gsap.fromTo(midiNotion, {opacity:0, y:50}, {opacity:1, y:0, duration:0.6, delay:0.2, scrollTrigger:{
        trigger:midiNotion
      }})
      gsap.fromTo(pad, {x:-80, y:80}, {x:0, y:0, duration: 0.6, scrollTrigger:{
        trigger:midiNotion
      }})
    }, [])

    return(
        <div className="feature">
              <div ref={titleRef} className="feature_title">
                {props.title}
              </div>
              <div ref={notionRef} className="feature_notion">
                {props.notion}
              </div>
          <div className="midi-container">
            <img ref={padRef} alt='midi_pad' src={require('./assets/midi_pad.png')} />
          </div>
        </div>
    )
  }

  function FeatureTips(props) {
    const titleRef = useRef(null);
    const notionRef = useRef(null);
    const rhythmRef = useRef(null);
    const chordsRef = useRef(null);
    const melodyRef = useRef(null);

    useEffect(() => {
      const tipsTitle = titleRef.current;
      const tipsNotion = notionRef.current;
      const rhythm = rhythmRef.current;
      const chords = chordsRef.current;
      const melody = melodyRef.current;

      gsap.fromTo(tipsTitle, {opacity:0, y:50}, {opacity:1, y:0, duration:0.6, scrollTrigger:{
        trigger:tipsTitle
      }})
      gsap.fromTo(tipsNotion, {opacity:0, y:50}, {opacity:1, y:0, duration:0.6, delay:0.2, scrollTrigger:{
        trigger:tipsNotion
      }})
      gsap.fromTo(rhythm, {opacity:0.5, y:100}, {opacity:1, y:0, duration:0.6, scrollTrigger:{
        trigger:tipsNotion
      }})
      gsap.fromTo(chords, {opacity:0.5, y:100}, {opacity:1, y:0, duration:0.6, scrollTrigger:{
        trigger:tipsNotion
      }})
      gsap.fromTo(melody, {opacity:0.5, y:100}, {opacity:1, y:0, duration:0.6, scrollTrigger:{
        trigger:tipsNotion
      }})
    }, [])

        return(
            <div className="feature bounded tips">
              <div ref={titleRef} className="feature_title">
                {props.title}
              </div>
              <div ref={notionRef} className="feature_notion">
                {props.notion}
                <div>
                  <img ref={rhythmRef} id = "tip_rhythm" src={require('./assets/tip_rhythm.png')} />
                  <img ref={chordsRef} id = "tip_chords" src={require('./assets/tip_chords.png')} />
                  <img ref={melodyRef} id = "tip_melody" src={require('./assets/tip_melody.png')} />
                </div>
                
              </div>
            </div>
        )
  }

  function FeatureCharacters(props) {
    const titleRef = useRef(null);
    const notionRef = useRef(null);

    useEffect(() => {
      const charactersTitle = titleRef.current;
      const charactersNotion = notionRef.current;

      gsap.fromTo(charactersTitle, {opacity:0, y:50}, {opacity:1, y:0, duration:0.6, scrollTrigger:{
        trigger:charactersTitle
      }})
      gsap.fromTo(charactersNotion, {opacity:0, y:50}, {opacity:1, y:0, duration:0.6, delay:0.2, scrollTrigger:{
        trigger:charactersNotion
      }})
    }, [])

        return(
            <div className="feature">
              <div ref={titleRef} className="feature_title">
                {props.title}
              </div>
              
              <div ref={notionRef} className="feature_notion">
                {props.notion}
              </div>
            </div>
        )
  }

  function FeatureCourse (props) {
    const titleRef = useRef(null);
    const notionRef = useRef(null);
    const rhythmCircleRef = useRef(null);

    useEffect(() => {
      const courseTitle = titleRef.current;
      const courseNotion = notionRef.current;
      const rhythmCircle = rhythmCircleRef.current;

      gsap.fromTo(courseTitle, {opacity:0, y:50}, {opacity:1, y:0, duration:0.6, scrollTrigger:{
        trigger:courseTitle
      }})
      gsap.fromTo(courseNotion, {opacity:0, y:50}, {opacity:1, y:0, duration:0.6, delay:0.2, scrollTrigger:{
        trigger:courseNotion
      }})
      gsap.fromTo(rhythmCircle, {opacity:0, scale:0.5}, {opacity:1, scale:1, duration:0.6, delay:0.2, scrollTrigger:{
        trigger:rhythmCircle
      }})
    }, [])

    return(
        <div className="feature bounded course">
          <div ref={titleRef} className="feature_title">
            {props.title}
          </div>
          <div ref={notionRef} className="feature_notion">
            {props.notion}
            <div>
              <img ref={rhythmCircleRef} id="circle" src={require('./assets/circle.png')} />
              <img id="box_rhythm" src={require('./assets/course_rhythm.png')} />
            </div>
          </div>
        </div>
    )
  }

  function Main() {
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
      const card1 = card1Ref.current;
      const card2 = card2Ref.current;
      const card3 = card3Ref.current;
      const card4 = card4Ref.current;

      gsap.fromTo(card1, {opacity:0, y:50, rotation:0}, {opacity:1, y:0, rotation:10,duration:0.6, scrollTrigger:{
        trigger:card1
      }})
      gsap.fromTo(card2, {opacity:0, y:50, rotation:0}, {opacity:1, y:0, rotation:-12,duration:0.6, scrollTrigger:{
        trigger:card2
      }})
      gsap.fromTo(card3, {opacity:0, y:50, rotation:0}, {opacity:1, y:0, rotation:8,duration:0.6, scrollTrigger:{
        trigger:card3
      }})
      gsap.fromTo(card4, {opacity:0, y:50, rotation:0}, {opacity:1, y:0, rotation:-13,duration:0.6, scrollTrigger:{
        trigger:card4
      }})

      // 下面这个操作是为了按钮在 stick 到顶部的时候有样式变化
      const stickyElm = buttonRef.current;

      const observer = new IntersectionObserver( 
        ([e])=> {
          e.target.classList.toggle('isSticky', e.intersectionRatio < 1)
        },
        {threshold: [1]}
      );

      observer.observe(stickyElm)
    }, [])

    function handleCard(e) {
      const card = e.currentTarget;
      console.log(card);
      
      gsap.fromTo(card, {rotation:'+=10'}, {rotation:'-=10', duration:0.6, ease: 'bounce'})
    }

      return (
        <div className="main">
            <div className="banner">
                <img src={require('./assets/bon_music_logo.png')} />
            </div>

            <div className="trailer-container">
              <img src={require('./assets/echo_pull.png')} />
              <iframe className="trailer-video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ">
              </iframe>
            </div>
            
            <div className="join_button" ref={buttonRef}>
                    <img src={require('./assets/button_join.png')}
                    onMouseOver={(e)=>{
                      e.currentTarget.src = require('./assets/button_join_hover.png')
                        
                    }}
                    onMouseOut={(e)=>{
                      e.currentTarget.src = require('./assets/button_join.png')
                        
                    }}
                    />
            </div>

            <div className="intro">
              <div className="intro_row">
                <FeatureMidi
                    title={'make music on your phone'}
                    notion={'easier than ever'}
                    enterProp={true}
                />
                <img ref={card1Ref} className="card" src={require('./assets/card_1.png')} onClick={handleCard}/>
              </div>
                
              <div className="intro_row">
              <img ref={card2Ref} className="card" src={require('./assets/card_2.png')} onClick={handleCard}/>
                <FeatureTips
                    title={'ultra beginner friendly'}
                    notion={'ezpz'}
                />
              </div>

              <div className="intro_row">
                <FeatureCharacters
                    title={'recruit your own animal band'}
                    notion={'find your favourite characters'}
                />
                <img ref={card3Ref} className="card" src={require('./assets/card_3.png')} onClick={handleCard}/>
              </div>
              
              <div className="intro_row">
                <img ref={card4Ref} className="card" src={require('./assets/card_4.png')} onClick={handleCard}/>
                <FeatureCourse
                    title={'learn music theory with interactive lessons'}
                    notion={'best lessons ever'}
                />
              </div>
            </div>
            <Birthday />
            <Characters />
            <Sounds />
            <Footer />
        </div>
      )
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Main />);
  