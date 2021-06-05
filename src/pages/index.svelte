<script lang="ts">
  import GamesInput from '@/components/GamesInput.svelte';
  import BubbleButton from '@/components/BubbleButton.svelte';
  import Fa from 'svelte-fa';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="content-wrapper">
  <h1>GameOver.gg</h1>

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

  h1 {
    color: var(--orange);
    text-transform: uppercase;
    font-size: 6rem;
    font-weight: 100;
    margin: .5rem auto;
    max-width: 14rem;
    font-family: nebula,sans-serif;
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
