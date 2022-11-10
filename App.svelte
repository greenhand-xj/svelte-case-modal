<script>
  import Modal from './Modal.svelte'
  import { modal } from './modal'
  import Toggle from './Toggle.svelte'
</script>

<main>
  <Toggle />
  {#if $modal.status === 'opened'}
    <Modal title={$modal.title}>
      {#if $modal.component}
        <svelte:component this={$modal.component} {...$modal.params} />
      {/if}
    </Modal>
  {/if}
</main>

<style>
</style>
