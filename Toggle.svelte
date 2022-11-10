<script>
  import Content from './Content.svelte'
  import { open } from './modal'
</script>

<button
  on:click={() =>
    open(
      'welcome to my world',
      {
        warning: 'no no no'
      },
      Content
    )}>Open</button
>
