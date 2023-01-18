<script lang="ts">
	import { onMount } from 'svelte';
	import KeyRow from './keyrow.svelte';

	//const synth = window.speechSynthesis;

	/*
const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");
*/

	$: voices = [];

	let selected_voice;
	let lines = ['hallo'];

	function handleKeydown(event) {
		console.log(event);
		handleKey(event.key);
	}

	function handleKey(key) {
		if (key == ' ') {
			say(lines.slice(-1)[0].split(/\s+/).slice(-1)[0]);

			let last = lines.pop();
			lines = [...lines, last + key];
		} else if (key == 'Enter') {
			say(lines.slice(-1)[0]);
			lines = [...lines, ''];
		} else if (key.length == 1) {
			let last = lines.pop();
			lines = [...lines, last + key];

			say(key);
		}

		console.log(lines);
	}

	onMount(() => {
		voices = speechSynthesis.getVoices().filter((v) => v.name.includes('German'));

		speechSynthesis.onvoiceschanged = () => {
			console.log(speechSynthesis.getVoices());
		};
	});

	let pitch = 1;
	let rate = 1;

	function say(text) {
		console.log('say', text);
		const synth = window.speechSynthesis;
		if (synth.speaking) {
			synth.cancel();
		}

		if (text !== '') {
			const utterThis = new SpeechSynthesisUtterance(text);

			utterThis.onend = function (event) {
				console.log('SpeechSynthesisUtterance.onend');
			};

			utterThis.onerror = function (event) {
				console.error('SpeechSynthesisUtterance.onerror');
			};

			utterThis.voice = selected_voice;

			utterThis.pitch = pitch;
			utterThis.rate = rate;
			synth.speak(utterThis);
		}
	}
	/*
inputForm.onsubmit = function (event) {
  event.preventDefault();

  speak();

  inputTxt.blur();
};

pitch.onchange = function () {
  pitchValue.textContent = pitch.value;
};

rate.onchange = function () {
  rateValue.textContent = rate.value;
};

voiceSelect.onchange = function () {
  speak();
};

*/
</script>

<div class="bg-black text-green-500 font-mono text-xl">
	<h1>First Shell</h1>

	{#each lines as line, linenum (linenum)}
		<div class="">
			<div class="whitespace-pre-wrap inline">&gt; {line.toUpperCase()}</div>
			{#if linenum == lines.length - 1}
				<div class="border-2 border-green-500 px-[4px] animate-pulse inline" />
			{/if}
		</div>
	{/each}
</div>


<KeyRow keys={[..."qwertzuiopü"]} keyhandler={handleKey}></KeyRow>
<KeyRow keys={[..."asdfghjklöä"]} keyhandler={handleKey}></KeyRow>
<KeyRow keys={[" ",..."yxcvbnm","Enter"]} keyhandler={handleKey}></KeyRow>


<div>voices:</div>
<select bind:value={selected_voice}>
	{#each voices as voice}
		<option value={voice}>{voice.name}</option>
	{/each}
</select>

<svelte:window on:keydown={handleKeydown} />
