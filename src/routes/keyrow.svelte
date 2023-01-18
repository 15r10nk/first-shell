<script lang="ts">
    import Key from "./key.svelte"

    export let keys:Array<string>;
	export let keyhandler = (key: string) => {};
</script>



<div class="flex flex-row gap-2 mb-2">
	{#each keys as key}
		<Key keyhandler={keyhandler} {key} />
	{/each}
</div>
