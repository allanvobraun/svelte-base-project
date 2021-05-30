<script lang="ts">
  import GamesInput from '@/components/GamesInput.svelte';
</script>

<div class="content-wrapper">
  <h1>GameOver.gg</h1>

  <p>
    Add the games you have alrady completed and prove that you are an experienced gamer.
  </p>
  <GamesInput/>
</div>

<style>

  h1 {
    color: var(--orange);
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 100;
    line-height: 1.1;
    margin: .5rem auto;
    max-width: 14rem;
    font-family: nebula,sans-serif;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
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
