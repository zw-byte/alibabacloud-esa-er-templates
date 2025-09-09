<script lang="ts">
  import Button from './Button.svelte';
  
  export let product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    rating?: number;
    reviews?: number;
    isNew?: boolean;
    isSale?: boolean;
  };
  
  $: discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
</script>

<div class="group bg-white rounded-2xl overflow-hidden card-hover border border-tech-gray-200">
  <div class="relative aspect-square overflow-hidden bg-tech-gray-50">
    <img 
      src={product.image} 
      alt={product.name}
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    
    <!-- Badges -->
    <div class="absolute top-4 left-4 flex flex-col space-y-2">
      {#if product.isNew}
        <span class="bg-tech-blue text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
      {/if}
      {#if product.isSale && discountPercentage > 0}
        <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          -{discountPercentage}%
        </span>
      {/if}
    </div>
    
    <!-- Quick Actions -->
    <div class="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <button class="p-2 bg-white rounded-full shadow-md hover:bg-tech-gray-50 transition-colors">
        <svg class="w-4 h-4 text-tech-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </button>
      <button class="p-2 bg-white rounded-full shadow-md hover:bg-tech-gray-50 transition-colors">
        <svg class="w-4 h-4 text-tech-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
      </button>
    </div>
  </div>
  
  <div class="p-6">
    <!-- Category -->
    <div class="text-tech-gray-500 text-sm font-medium mb-2 uppercase tracking-wide">
      {product.category}
    </div>
    
    <!-- Product Name -->
    <h3 class="text-lg font-semibold text-tech-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
      <a href="/products/{product.id}" class="hover:underline">
        {product.name}
      </a>
    </h3>
    
    <!-- Rating -->
    {#if product.rating && product.reviews}
      <div class="flex items-center mb-3">
        <div class="flex items-center">
          {#each Array(5) as _, i}
            <svg 
              class="w-4 h-4 {i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-tech-gray-300'}" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          {/each}
        </div>
        <span class="text-tech-gray-600 text-sm ml-2">({product.reviews})</span>
      </div>
    {/if}
    
    <!-- Price -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <span class="text-xl font-bold text-tech-gray-900">${product.price}</span>
        {#if product.originalPrice && product.originalPrice > product.price}
          <span class="text-tech-gray-500 line-through text-sm">${product.originalPrice}</span>
        {/if}
      </div>
    </div>
    
    <!-- Add to Cart Button -->
    <Button variant="primary" size="sm" on:click={() => console.log('Added to cart:', product.id)}>
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"/>
      </svg>
      Add to Cart
    </Button>
  </div>
</div>
