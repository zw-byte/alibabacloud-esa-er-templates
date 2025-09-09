<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  
  // All products data
  const allProducts = [
    {
      id: '1',
      name: 'ProMax Smartphone',
      price: 999,
      originalPrice: 1099,
      image: '/images/smartphone-1.svg',
      category: 'Smartphones',
      rating: 4.8,
      reviews: 1234,
      isNew: true,
      isSale: true
    },
    {
      id: '2',
      name: 'UltraBook Pro 16"',
      price: 2499,
      image: '/images/laptop-1.svg',
      category: 'Laptops',
      rating: 4.9,
      reviews: 856,
      isNew: true
    },
    {
      id: '3',
      name: 'SoundMax Earbuds',
      price: 249,
      originalPrice: 279,
      image: '/images/earbuds-1.svg',
      category: 'Audio',
      rating: 4.7,
      reviews: 2156,
      isSale: true
    },
    {
      id: '4',
      name: 'FlexPad Tablet',
      price: 599,
      image: '/images/tablet-1.svg',
      category: 'Tablets',
      rating: 4.6,
      reviews: 743
    },
    {
      id: '5',
      name: 'Elite Smartphone',
      price: 799,
      originalPrice: 899,
      image: '/images/smartphone-2.svg',
      category: 'Smartphones',
      rating: 4.5,
      reviews: 2341,
      isSale: true
    },
    {
      id: '6',
      name: 'PowerBook Air',
      price: 1199,
      image: '/images/laptop-2.svg',
      category: 'Laptops',
      rating: 4.8,
      reviews: 1456
    },
    {
      id: '7',
      name: 'SmartWatch Pro',
      price: 399,
      image: '/images/smartwatch-1.svg',
      category: 'Wearables',
      rating: 4.7,
      reviews: 987,
      isNew: true
    },
    {
      id: '8',
      name: 'MaxPad Pro 12.9"',
      price: 1099,
      image: '/images/tablet-2.svg',
      category: 'Tablets',
      rating: 4.9,
      reviews: 654
    },
    {
      id: '9',
      name: 'AudioMax Headphones',
      price: 549,
      image: '/images/headphones-1.svg',
      category: 'Audio',
      rating: 4.6,
      reviews: 432
    },
    {
      id: '10',
      name: 'Precision Mouse',
      price: 79,
      image: '/images/mouse-1.svg',
      category: 'Accessories',
      rating: 4.3,
      reviews: 876
    },
    {
      id: '11',
      name: 'Pro Keyboard',
      price: 179,
      image: '/images/keyboard-1.svg',
      category: 'Accessories',
      rating: 4.5,
      reviews: 543
    },
    {
      id: '12',
      name: 'UltraWide Display',
      price: 1599,
      image: '/images/monitor-1.svg',
      category: 'Displays',
      rating: 4.8,
      reviews: 234
    }
  ];
  
  const categories = ['All', 'Smartphones', 'Laptops', 'Tablets', 'Audio', 'Wearables', 'Accessories', 'Displays'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];
  
  let selectedCategory = 'All';
  let selectedSort = 'featured';
  let searchQuery = '';
  
  $: filteredProducts = allProducts
    .filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });
</script>

<svelte:head>
  <title>Products - TechHub</title>
  <meta name="description" content="Browse our complete collection of premium technology products. Find smartphones, laptops, tablets, audio equipment and more." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-tech-gray-900 to-tech-gray-800 text-white py-20">
  <div class="section-padding">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">
        Discover Innovation
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-8">
        Explore our complete collection of premium technology products designed to enhance your digital lifestyle
      </p>
      
      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto relative">
        <input 
          bind:value={searchQuery}
          type="text" 
          placeholder="Search products..." 
          class="w-full px-6 py-4 pl-12 rounded-full text-tech-gray-900 focus:outline-none focus:ring-2 focus:ring-tech-blue text-lg"
        />
        <svg class="w-6 h-6 text-tech-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<!-- Filters and Sort -->
<section class="bg-white border-b border-tech-gray-200 sticky top-20 z-40">
  <div class="section-padding py-6">
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      <!-- Category Filters -->
      <div class="flex flex-wrap gap-2">
        {#each categories as category}
          <button 
            class="px-4 py-2 rounded-full font-medium transition-all duration-200 {
              selectedCategory === category 
                ? 'bg-tech-blue text-white' 
                : 'bg-tech-gray-100 text-tech-gray-700 hover:bg-tech-gray-200'
            }"
            on:click={() => selectedCategory = category}
          >
            {category}
          </button>
        {/each}
      </div>
      
      <!-- Sort and Results Count -->
      <div class="flex items-center gap-4">
        <span class="text-tech-gray-600">
          {filteredProducts.length} products
        </span>
        <select 
          bind:value={selectedSort}
          class="px-4 py-2 border border-tech-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-blue"
        >
          {#each sortOptions as option}
            <option value={option.value}>{option.label}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</section>

<!-- Products Grid -->
<section class="py-12">
  <div class="section-padding">
    {#if filteredProducts.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {#each filteredProducts as product}
          <ProductCard {product} />
        {/each}
      </div>
    {:else}
      <!-- Empty State -->
      <div class="text-center py-16">
        <svg class="w-24 h-24 text-tech-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.5a7.962 7.962 0 01-6-2.709M3 3l1.5 1.5m0 0l1.5 1.5M6 6l12 12"/>
        </svg>
        <h3 class="text-2xl font-semibold text-tech-gray-900 mb-2">No products found</h3>
        <p class="text-tech-gray-600 mb-6">
          Try adjusting your search or filter criteria to find what you're looking for.
        </p>
        <Button on:click={() => { selectedCategory = 'All'; searchQuery = ''; }}>
          Clear Filters
        </Button>
      </div>
    {/if}
  </div>
</section>

<!-- Load More (if needed) -->
{#if filteredProducts.length >= 12}
  <section class="py-12 text-center">
    <Button variant="outline" size="lg">
      Load More Products
    </Button>
  </section>
{/if}

<!-- Newsletter CTA -->
<section class="bg-tech-gray-50 py-20">
  <div class="section-padding text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-tech-gray-900 mb-4">
      Can't find what you're looking for?
    </h2>
    <p class="text-xl text-tech-gray-600 mb-8 max-w-2xl mx-auto">
      Get notified when new products arrive or contact our expert team for personalized recommendations
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button href="/contact">
        Contact Support
      </Button>
      <Button variant="outline">
        Request Product
      </Button>
    </div>
  </div>
</section>
