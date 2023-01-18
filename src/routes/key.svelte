<script lang="ts">
	export let keyhandler = (key: string) => {};
	export let key = '';
</script>

<button
	on:click={() => keyhandler(key)}
	class="border rounded font-mono active:bg-green-500 px-3 h-8 m-1 bg-gray-200 drop-shadow-md border-gray-500"
	>{key.toUpperCase()}</button
>
