<div class="main-wrapper">
    <div class="content-wrapper">
        <h1>Your game overs:</h1>
        <div class="game-list">
            {#each $gamesStore as game}
                <GameDisplay gameEntity={game}/>
            {/each}
        </div>
    </div>
</div>

<script lang="ts">
    import GameDisplay from '@/components/GameDisplay.svelte';
    import {gamesStore} from "../stores/gamesEntityStore";

</script>

<style lang="scss">

  h1 {
    font-family: "Abel", sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    margin-block: 0;
    text-decoration: none;
    text-transform: none;
    align-self: flex-start;
    margin: 10px 0;
  }
  .main-wrapper {
    align-items: center;
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  .content-wrapper {
    color: white;
    font-size: 18px;
    -moz-box-pack: center;
    width: 100%;
    min-width: 980px;
    max-width: max-content;
    padding: 30px 0;

    @media only screen and (max-width: 1200px) {
      min-width: 640px;
      max-width: 910px;
    }

    @media only screen and (max-width: 960px) {
      min-width: 600px;
      max-width: 740px;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      min-width: 320px;
      max-width: 540px;
    }

    @media only screen and (max-width: 480px) {
      min-width: unset;
      padding: 56px 0;
    }

  }

  .game-list {
    display: flex;
    flex-direction: column;
    -moz-box-pack: center;
    justify-content: center;
    margin-top: unset;
    width: 100%;
    background-color: rgb(32, 35, 43);
    border-bottom: 8px solid rgb(34, 34, 40);
    flex-wrap: unset;
    padding: .4rem;
  }
</style>
