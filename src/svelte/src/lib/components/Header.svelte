<script lang="ts">
  import { page } from '$app/stores';
  
  let isMenuOpen = false;
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' }
  ];
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-tech-gray-200">
  <nav class="section-padding py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/" class="text-2xl font-bold text-tech-gray-900 hover:text-tech-blue transition-colors">
          <svg class="w-8 h-8 mr-2 inline-block" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          TechHub
        </a>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navigation as item}
          <a 
            href={item.href} 
            class="text-tech-gray-700 hover:text-tech-blue transition-colors font-medium relative group"
            class:text-tech-blue={$page.url.pathname === item.href}
          >
            {item.name}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-blue transition-all duration-200 group-hover:w-full"></span>
          </a>
        {/each}
      </div>
      
      <!-- Cart and Search -->
      <div class="hidden md:flex items-center space-x-4">
        <button class="p-2 text-tech-gray-700 hover:text-tech-blue transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </button>
        <button class="p-2 text-tech-gray-700 hover:text-tech-blue transition-colors relative">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"/>
          </svg>
          <span class="absolute -top-1 -right-1 bg-tech-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
        </button>
      </div>
      
      <!-- Mobile menu button -->
      <button 
        class="md:hidden p-2 text-tech-gray-700 hover:text-tech-blue transition-colors"
        on:click={toggleMenu}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          {/if}
        </svg>
      </button>
    </div>
    
    <!-- Mobile Navigation -->
    {#if isMenuOpen}
      <div class="md:hidden mt-4 py-4 border-t border-tech-gray-200 animate-slide-up">
        <div class="flex flex-col space-y-4">
          {#each navigation as item}
            <a 
              href={item.href} 
              class="text-tech-gray-700 hover:text-tech-blue transition-colors font-medium py-2"
              class:text-tech-blue={$page.url.pathname === item.href}
              on:click={() => isMenuOpen = false}
            >
              {item.name}
            </a>
          {/each}
          <div class="flex items-center space-x-4 pt-4 border-t border-tech-gray-200">
            <button class="p-2 text-tech-gray-700 hover:text-tech-blue transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
            <button class="p-2 text-tech-gray-700 hover:text-tech-blue transition-colors relative">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"/>
              </svg>
              <span class="absolute -top-1 -right-1 bg-tech-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</header>
