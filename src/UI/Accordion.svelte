<script>
  export let open = false;
  import { slide } from "svelte/transition";
  function onClick() {
    open = !open;
  }
</script>

<div class="accordion">
  <div class="header" on:click={onClick}>
    <slot name="header" />
  </div>
  {#if open}
  <div class="content" transition:slide>
    <slot name="content" />
  </div>
  {/if}
</div>

<style>
    .header {
        font-weight: bold;
        user-select: none;
        text-align: center;
    }
    .accordion {
        border-top: 1px solid;
        border-color: grey;
        padding: 0.5em;
        margin: 0 2em;
    }
    .content {
        max-width: 40ch;
        text-align: justify;
        margin: 0.5em auto 0;
    }

</style>
