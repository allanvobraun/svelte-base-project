<script lang="ts">
  import GamesInput from '@/components/GamesInput.svelte';
  import BubbleButton from '@/components/BubbleButton.svelte';
  import Fa from 'svelte-fa';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="content-wrapper">
  <div class="title">GameOver.gg</div>

  <p>
    Add the games you have already completed and prove that you are an experienced gamer.
  </p>

  <div class="game-input">
    <GamesInput />
  </div>
  <div style="margin-top: 50px">
    <BubbleButton><Fa icon={faPlus} size="2x"/></BubbleButton>
  </div>

</div>

<style>
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
    /*font-size: 7.8vw;*/
    font-size: clamp(2.8rem, 7.8vw, 7rem);
    font-weight: 100;
    margin: .2rem auto .5rem auto;
    font-family: nebula,sans-serif;
    max-width: 100%;
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
