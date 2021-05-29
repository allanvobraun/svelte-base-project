<script lang="ts">
    const comidas = ['batata', 'arroz', 'feijao'];
</script>

<div class="comidas">
    {#each comidas as comida}
        <h1>{comida}</h1>
    {/each}
</div>
<style>

</style>
