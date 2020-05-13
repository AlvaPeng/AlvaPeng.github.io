const synth = new Tone.Synth().toMaster();
synth.triggerAttackRelease("C4","8n"); // key + duration(这里是八分音符)

// 没有用户行为 web 不会自动播放音频
document.querySelector('button').addEventListener('click', async () => {
	await Tone.start()
})
