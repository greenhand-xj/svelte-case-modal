<script>
  export let title = "modal-title";
  let isOpen = true;
</script>


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
  .preventScroll {
    overflow-y: hidden;
  }
</style>

<main>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-head">
        <h3 class="title">{title}</h3>
        <button type="button">&#10005</button>
      </div>
      <slot>
        Description
      </slot>
    </div>
  </div>
</main>