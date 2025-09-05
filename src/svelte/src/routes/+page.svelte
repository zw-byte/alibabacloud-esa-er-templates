<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  
  // Featured products data
  const featuredProducts = [
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
    }
  ];
  
  const categories = [
    {
      name: 'Smartphones',
      image: '/images/category-smartphones.svg',
      count: 24
    },
    {
      name: 'Laptops',
      image: '/images/category-laptops.svg',
      count: 18
    },
    {
      name: 'Audio',
      image: '/images/category-audio.svg',
      count: 32
    },
    {
      name: 'Accessories',
      image: '/images/category-accessories.svg',
      count: 45
    }
  ];
</script>

<svelte:head>
  <title>TechHub - Premium Technology Store</title>
  <meta name="description" content="Discover the latest in premium technology. Shop smartphones, laptops, audio equipment and more with premium quality and service." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 hero-gradient"></div>
  <div class="absolute inset-0 bg-black/20"></div>
  
  <div class="relative z-10 text-center text-white section-padding max-w-4xl mx-auto">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
      The Future is <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Here</span>
    </h1>
    <p class="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
      Experience premium technology that transforms the way you work, create, and connect.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
      <Button href="/products" size="lg">
        Shop Now
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </Button>
      <Button variant="outline" size="lg">
        Watch Video
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4"/>
        </svg>
      </Button>
    </div>
  </div>
  
  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
    </svg>
  </div>
</section>

<!-- Categories Section -->
<section class="py-20 bg-tech-gray-50">
  <div class="section-padding">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-tech-gray-900 mb-4">
        Shop by Category
      </h2>
      <p class="text-xl text-tech-gray-600 max-w-2xl mx-auto">
        Discover our carefully curated selection of premium technology products
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each categories as category}
        <div class="group cursor-pointer">
          <div class="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 card-hover">
            <img 
              src={category.image} 
              alt={category.name}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center text-white">
                <h3 class="text-2xl font-bold mb-2">{category.name}</h3>
                <p class="text-sm opacity-90">{category.count} Products</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Featured Products Section -->
<section class="py-20">
  <div class="section-padding">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-tech-gray-900 mb-4">
        Featured Products
      </h2>
      <p class="text-xl text-tech-gray-600 max-w-2xl mx-auto">
        Handpicked favorites that represent the pinnacle of innovation and design
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each featuredProducts as product}
        <ProductCard {product} />
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <Button href="/products" variant="outline" size="lg">
        View All Products
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </Button>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="py-20 bg-tech-gray-900 text-white">
  <div class="section-padding">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        Why Choose TechHub?
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        We're committed to delivering an exceptional shopping experience
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="text-center">
        <div class="w-16 h-16 bg-tech-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4">Free Shipping</h3>
        <p class="text-gray-300">
          Complimentary shipping on all orders over $99. Fast, reliable delivery worldwide.
        </p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-tech-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4">Warranty Protection</h3>
        <p class="text-gray-300">
          Comprehensive warranty coverage and expert support for complete peace of mind.
        </p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-tech-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4">Premium Support</h3>
        <p class="text-gray-300">
          24/7 customer support from our team of technology experts and specialists.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Newsletter Section -->
<section class="py-20 bg-gradient-to-r from-tech-blue to-purple-600">
  <div class="section-padding text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
      Stay in the Loop
    </h2>
    <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
      Be the first to know about new products, exclusive offers, and tech insights
    </p>
    
    <div class="max-w-md mx-auto flex">
      <input 
        type="email" 
        placeholder="Enter your email address" 
        class="flex-1 px-6 py-4 rounded-l-full text-tech-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <button class="bg-tech-gray-900 text-white px-8 py-4 rounded-r-full hover:bg-tech-gray-800 transition-colors font-medium">
        Subscribe
      </button>
    </div>
  </div>
</section>
