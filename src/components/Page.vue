<script setup lang="ts">
import Menu from './Menu.vue'

</script>
<template>
    <div class="page">
        <div class="sidebar">
            <Menu/>
        </div>
        <main>
            <div class="top-row px-4">
                <a href="https://learn.microsoft.com/aspnet/core/" target="_blank">About</a>
            </div>        
            <slot></slot>
        </main>
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.page {
    position: relative;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

.sidebar {
    background-image: linear-gradient(180deg,rgb(240, 199, 16) 0%, #a6a2a7 70%);
}

.top-row {
    background-color: #f7f7f7;
    border-bottom: 1px solid #d6d5d5;
    justify-content: flex-end;
    height: 3.5rem;
    display: flex;
    align-items: center;
}

.top-row :deep(a), .top-row :deep(.btn-link) {
    white-space: nowrap;
    margin-left: 1.5rem;
    text-decoration: none;
}

.top-row :deep(a:hover), .top-row :deep(.btn-link:hover) {
    text-decoration: underline;
}

.top-row :deep(a:first-child) {
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width: 640.98px) {
    .top-row {
        justify-content: space-between;
    }

    .top-row :deep(a), .top-row :deep(.btn-link) {
        margin-left: 0;
    }
}

@media (min-width: 641px) {
    .page {
        flex-direction: row;
    }

    .sidebar {
        width: 200px;
        height: 100vh;
        position: sticky;
        top: 0;
    }

    .top-row {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .top-row.auth :deep(a:first-child) {
        flex: 1;
        text-align: right;
        width: 0;
    }

    .top-row, article {
        padding-left: 2rem !important;
        padding-right: 1.5rem !important;
    }
}
</style>