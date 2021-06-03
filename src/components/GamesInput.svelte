<script lang="ts">
    import clickOutside from '@/directives/clickOutside';
    import axios from "axios";
    import debounce from "lodash.debounce";

    let options: string[] = [];
    let inputText = '';
    let rgbON = false;
    const searchURL: string = import.meta.env.VITE_SERVER_URL + 'search/';

    function setText(text: string): void {
        inputText = text;
    }


    const inputDebounce = debounce((e: Event) => {
        const target = e.target as HTMLInputElement;
        onChangeText(target.value);
    }, 300);

    function onChangeText(text: string): void {
        if (text.length < 3) return;
        getGames(text.trim())
            .then((games) => {
                options = games;
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    async function getGames(query: string): Promise<string[]> {
        const response = await axios.get(searchURL + query);
        return response.data as string[];
    }

    function onFocusLoss(): void {
        options = [];
        if (inputText === '') {
            rgbON = false;
        }
    }

</script>

<div use:clickOutside on:click_outside={onFocusLoss} class="form__group field">
    <input
            on:focus={() => rgbON = true }
            on:input={inputDebounce}
            bind:value={inputText}
            autocomplete="off"
            type="text"
            class="form__field"
            class:selected="{rgbON}"
            placeholder="Game"
            id='name'
            required/>

    {#if options.length !== 0}
        <ul id="dropdown" class="dropdown-content">
            {#each options as option }
                <li on:click={() => setText(option)}>
                <span>
                    <span class="highlight">{option}</span>
                </span>
                </li>
            {/each}
        </ul>
    {/if}

    <label for="name" class="form__label">Game</label>
</div>

<style lang="scss">
  @use "sass:color";

  $primary: #bd00ff;
  $secondary: var(--orange);
  $white: #fff;
  $gray: #9b9b9b;
  $black: #1e1e1e;

  /** dropdown **/

  #dropdown {
    display: block;
    transform-origin: 0 0 0;
    opacity: 1;
  }

  .dropdown-content {
    background-color: $black;
    margin: 0;
    display: none;
    min-width: 100px;
    overflow-y: auto;
    opacity: 0;
    z-index: 9999;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    box-shadow: rgba(0, 0, 0) 0 3px 8px;

    li {
      clear: both;
      color: rgba(0, 0, 0, 0.87);
      cursor: pointer;
      height: 50px;
      line-height: 1.5rem;
      width: 100%;
      text-align: left;
      display: flex;

      &:hover {
        background-color: color.adjust($black, $lightness: +10%);
      }

      span {
        height: 50px;

        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 22px;
        flex-grow: 1;
        padding: 0 .5rem;

        .highlight {
          height: 50px;
          color: white;
        }
      }
    }
  }

  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }

  .form__field.selected {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight: 700;
    }

    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
  }

  /* reset input */
  .form__field {
    &:required, &:invalid {
      box-shadow: none;
    }
  }

  /* demo */
  body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 1.5rem;
    background-color: #222222;
  }
</style>
