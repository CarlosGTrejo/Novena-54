<script>
  export let open = false;
  import { slide } from "svelte/transition";
  function onClick() {
    open = !open;
  }
</script>

<div class="accordion">
  <button class="header" on:click={onClick}>
    <slot name="header" />
  </button>
  {#if open}
  <div class="content" transition:slide>
    <slot name="content" />
  </div>
  {/if}
</div>

<style>
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    margin: 0;
    text-align: justify;
    font: inherit;
    outline: none;
  }
  .header {
      font-weight: bold;
      user-select: none;
      text-align: center;
  }
  .accordion {
      border-top: 1px solid;
      border-color: var(--text);
      padding: 0.5em;
      margin: 0 2em;
  }
  .content {
      max-width: 40ch;
      text-align: justify;
      margin: 0.5em auto 0;
  }

</style>
