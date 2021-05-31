<script lang="ts">
    import { url, layout } from "@roxi/routify";
</script>

<header>
    <nav>
        <a href="/">Home</a>
        {#each $layout.children as {path, title}}
            <a href={$url(path)}>{title}</a>
        {/each}
    </nav>
</header>

<main>
    <slot/>
</main>

<style>

    nav {
        overflow: hidden;
        background-color: #333;
    }

    nav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    nav a:hover {
        background-color: #ddd;
        color: black;
    }

    nav a.active {
        background-color: #04AA6D;
        color: white;
    }
</style>
