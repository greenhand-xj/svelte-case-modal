<script>
  import { onMount } from 'svelte'
  import { close, modal } from './modal'
  import { fade, scale } from 'svelte/transition'
  export let title = 'modal-title'
  let isOpen = true
  $: {
    if (isOpen) {
      document.body.classList.add('prevent-scroll')
    } else {
      document.body.classList.remove('prevent-scroll')
    }
  }
  let modalElement = null
  const handleKeydown = e => {
    if (e.keyCode === 27) {
      close()
      $modal.firstFocusElement.focus()
    }
    const allFocusableElements = modalElement.querySelectorAll('a[href],input:not(:disabled),button:not(:disabled),area,textarea:not(:disabled),[tabindex="0"]')
    const first = allFocusableElements[0]
    const len = allFocusableElements.length
    const last = allFocusableElements[len - 1]
    if (e.keyCode === 9) {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }
  onMount(() => {
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  })
</script>

<main>
  <div
    transition:fade
    class="modal-wrapper"
    on:click={e => {
      if (e.target === e.currentTarget) {
        close()
      }
    }}
  >
    <div bind:this={modalElement} class="modal" transition:scale={{ delay: 150, duration: 300 }}>
      <div class="modal-head">
        <h3 class="title">{title}</h3>
        <button type="button" on:click={() => close()}>&#10005</button>
      </div>
      <slot>Description</slot>
    </div>
  </div>
</main>

<style>
  .modal-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(25, 25, 25, 0.77);
  }

  .modal {
    width: 55%;
    max-width: 300px;
    max-height: 75vh;
    margin: 10% auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 3px 10px rgba(25, 25, 25, 0.2);
    padding: 25px 15px;
    overflow-y: auto;
  }
  .modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  .title {
    margin: 0;
  }

  button {
    appearance: none;
    border: 0;
    background-color: transparent;
    margin: 0;
    border-radius: 4px;
    width: 2rem;
    height: 2rem;
    transition: 0.3s;
  }
  button:hover {
    background-color: rgba(25, 25, 25, 0.2);
  }
  button:active {
    background-color: rgba(25, 25, 25, 0.4);
  }
  :global(.prevent-scroll) {
    overflow-y: hidden;
  }
</style>
