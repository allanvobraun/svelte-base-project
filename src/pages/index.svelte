<div class="content-wrapper" bind:this={parent}>

    <div class="title" use:textfit={{mode: 'single', parent, update, max:110}}>GameOver.gg</div>

    <p>
        Add the games you have already completed and prove that you are an experienced gamer.
    </p>

    <div class="game-input">
        <GamesInput bind:inputText={gameText}/>
    </div>
    <div style="margin: 50px auto">
        <BubbleButton on:click={addGame}>
            <Fa icon={faPlus} size="2x"/>
        </BubbleButton>
    </div>
</div>

<script lang="ts">
    import GamesInput from '@/components/GamesInput.svelte';
    import BubbleButton from '@/components/BubbleButton.svelte';
    import Fa from 'svelte-fa';
    import {faPlus} from '@fortawesome/free-solid-svg-icons';
    import {onMount} from 'svelte';
    import {textfit} from 'svelte-textfit';
    import {gamesStore} from "@/stores/gamesStore";

    let parent: HTMLElement;
    let update = false;
    let gameText: string;


    onMount(() => {
        window.addEventListener("resize", () => {
            update = !update;
        });
    });

    function addGame(): void {
        if (gameText.length === 0 ) return;
        gamesStore.push(gameText);
        console.log($gamesStore);
    }

</script>

<style lang="scss">
  .game-input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    width: 100vw;
    margin-top: 100px;
  }

  .title {
    color: var(--orange);
    text-transform: uppercase;
    font-weight: 100;
    margin: .2rem -3px .5rem auto;
    font-family: nebula, sans-serif;

    @media only screen and (min-width: 480px) {
      margin: .2rem auto .5rem auto;
    }
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    color: var(--white);
    font-size: 1.25rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
