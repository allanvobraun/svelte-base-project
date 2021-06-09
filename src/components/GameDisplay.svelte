<div class="game-card">

    <img src={ gameEntity.cover ?? "src/assets/images/404.png"} alt="portal">
    <div class="card-body">
        <div class="card-center">
            <span class="game-name">{gameEntity.name}</span>
            <span class="game-date">
                {gameEntity.addedAt}
            </span>
        </div>
        <div class="card-end">
            <button>
                <Fa icon={faEdit} size="2x" class="svg"/>
            </button>
            <button>
                <Fa icon={faTrashAlt} size="2x"/>
            </button>
        </div>
    </div>
</div>

<script lang="ts">
    import Fa from 'svelte-fa';
    import {faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons';
    import type GameEntity from "../util/GameEntity";

    export let gameEntity: GameEntity;
</script>

<style lang="scss">
  @import "src/assets/scss/variables.scss";

  button {
    color: $orange !important;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .game-card {
    display: flex;
    flex-direction: row;
    margin: .5rem;
    background-color: #333333;
    max-height: 250px;

    img {
      width: 400px;
      height: 200px;
      object-fit: cover;
    }

    .card-body {
      flex-grow: 1;
      display: flex;
      flex-direction: row;

      .card-center {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 14px;
        flex-grow: 1;

        .game-name {
          font-size: 32px;
          font-weight: 700;
          line-height: 32px;
          font-family: "Abel", sans-serif;
          color: white;
          align-self: flex-start;
        }

        .game-date {
          line-height: 100%;
          font-size: 18px;
          align-self: flex-start;

        }
      }

      .card-end {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem 14px;
      }
    }
  }

</style>
