<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  
  // Mock product data - in a real app, this would come from an API or database
  const productData = {
    '1': {
      id: '1',
      name: 'ProMax Smartphone',
      price: 999,
      originalPrice: 1099,
      images: [
        '/images/smartphone-1.svg',
        '/images/smartphone-1-alt1.svg',
        '/images/smartphone-1-alt2.svg',
        '/images/smartphone-1-alt3.svg'
      ],
      category: 'Smartphones',
      rating: 4.8,
      reviews: 1234,
      isNew: true,
      isSale: true,
      description: 'The most advanced smartphone yet, featuring the X1 Pro chip, premium aluminum design, and Pro camera system with 5x optical zoom.',
      features: [
        'X1 Pro chip with 8-core GPU',
        'Pro camera system (50MP, 12MP, 12MP)',
        'Up to 30 hours video playback',
        'Premium aluminum design',
        'Smart Action Button',
        '5G capable',
        'Advanced Face Recognition',
        'Wireless charging & reverse charging'
      ],
      specifications: {
        'Display': '6.2-inch OLED ProDisplay',
        'Chip': 'X1 Pro',
        'Storage': '128GB, 256GB, 512GB, 1TB',
        'Camera': '50MP Main, 12MP Ultra Wide, 12MP Telephoto',
        'Battery': 'Up to 30 hours video playback',
        'Colors': 'Space Gray, Ocean Blue, Pearl White, Midnight Black',
        'Weight': '185 grams',
        'Water Resistance': 'IP68'
      },
      inStock: true,
      stockCount: 15
    },
    // Add more products as needed...
  };
  
  const relatedProducts = [
    {
      id: '2',
      name: 'UltraBook Pro 16"',
      price: 2499,
      image: '/images/laptop-1.svg',
      category: 'Laptops',
      rating: 4.9,
      reviews: 856
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
  
  $: productId = $page.params.id;
  $: product = productId ? productData[productId as keyof typeof productData] : undefined;
  
  let selectedImageIndex = 0;
  let quantity = 1;
  let selectedStorage = '128GB';
  let selectedColor = 'Space Gray';
  
  function selectImage(index: number) {
    selectedImageIndex = index;
  }
  
  function addToCart() {
    console.log('Adding to cart:', { productId, quantity, selectedStorage, selectedColor });
    // In a real app, this would add the item to cart state/store
  }
  
  $: discountPercentage = product?.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
</script>

<svelte:head>
  <title>{product?.name || 'Product'} - TechHub</title>
  <meta name="description" content={product?.description || 'Premium technology product from TechHub'} />
</svelte:head>

{#if product}
  <!-- Breadcrumb -->
  <nav class="bg-tech-gray-50 py-4">
    <div class="section-padding">
      <div class="flex items-center space-x-2 text-sm text-tech-gray-600">
        <a href="/" class="hover:text-tech-blue">Home</a>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <a href="/products" class="hover:text-tech-blue">Products</a>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <span class="text-tech-gray-900">{product.name}</span>
      </div>
    </div>
  </nav>

  <!-- Product Details -->
  <section class="py-12">
    <div class="section-padding">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Images -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="aspect-square bg-tech-gray-50 rounded-2xl overflow-hidden">
            <img 
              src={product.images[selectedImageIndex]} 
              alt={product.name}
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Thumbnail Images -->
          <div class="flex space-x-4 overflow-x-auto">
            {#each product.images as image, index}
              <button 
                class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 {
                  selectedImageIndex === index 
                    ? 'border-tech-blue' 
                    : 'border-tech-gray-200 hover:border-tech-gray-300'
                }"
                on:click={() => selectImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  class="w-full h-full object-cover"
                />
              </button>
            {/each}
          </div>
        </div>
        
        <!-- Product Info -->
        <div class="space-y-6">
          <!-- Category and New Badge -->
          <div class="flex items-center space-x-3">
            <span class="text-tech-gray-500 font-medium uppercase tracking-wide text-sm">
              {product.category}
            </span>
            {#if product.isNew}
              <span class="bg-tech-blue text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
            {/if}
            {#if product.isSale && discountPercentage > 0}
              <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                -{discountPercentage}% OFF
              </span>
            {/if}
          </div>
          
          <!-- Product Name -->
          <h1 class="text-4xl md:text-5xl font-bold text-tech-gray-900">
            {product.name}
          </h1>
          
          <!-- Rating -->
          {#if product.rating && product.reviews}
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                {#each Array(5) as _, i}
                  <svg 
                    class="w-5 h-5 {i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-tech-gray-300'}" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                {/each}
                <span class="ml-2 text-tech-gray-900 font-medium">{product.rating}</span>
              </div>
              <span class="text-tech-gray-600">({product.reviews} reviews)</span>
            </div>
          {/if}
          
          <!-- Price -->
          <div class="flex items-center space-x-4">
            <span class="text-4xl font-bold text-tech-gray-900">${product.price}</span>
            {#if product.originalPrice && product.originalPrice > product.price}
              <span class="text-2xl text-tech-gray-500 line-through">${product.originalPrice}</span>
            {/if}
          </div>
          
          <!-- Description -->
          <p class="text-lg text-tech-gray-600 leading-relaxed">
            {product.description}
          </p>
          
          <!-- Options -->
          <div class="space-y-6">
            <!-- Storage Options -->
            <div>
              <h3 class="text-lg font-semibold text-tech-gray-900 mb-3">Storage</h3>
              <div class="flex flex-wrap gap-3">
                {#each ['128GB', '256GB', '512GB', '1TB'] as storage}
                  <button 
                    class="px-4 py-2 border rounded-lg font-medium transition-all duration-200 {
                      selectedStorage === storage 
                        ? 'border-tech-blue bg-tech-blue text-white' 
                        : 'border-tech-gray-300 text-tech-gray-700 hover:border-tech-gray-400'
                    }"
                    on:click={() => selectedStorage = storage}
                  >
                    {storage}
                  </button>
                {/each}
              </div>
            </div>
            
            <!-- Color Options -->
            <div>
              <h3 class="text-lg font-semibold text-tech-gray-900 mb-3">Color</h3>
              <div class="flex flex-wrap gap-3">
                {#each ['Space Gray', 'Ocean Blue', 'Pearl White', 'Midnight Black'] as color}
                  <button 
                    class="px-4 py-2 border rounded-lg font-medium transition-all duration-200 {
                      selectedColor === color 
                        ? 'border-tech-blue bg-tech-blue text-white' 
                        : 'border-tech-gray-300 text-tech-gray-700 hover:border-tech-gray-400'
                    }"
                    on:click={() => selectedColor = color}
                  >
                    {color}
                  </button>
                {/each}
              </div>
            </div>
            
            <!-- Quantity -->
            <div>
              <h3 class="text-lg font-semibold text-tech-gray-900 mb-3">Quantity</h3>
              <div class="flex items-center space-x-3">
                <button 
                  class="w-10 h-10 border border-tech-gray-300 rounded-lg flex items-center justify-center hover:bg-tech-gray-50 disabled:opacity-50"
                  on:click={() => quantity = Math.max(1, quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span class="w-12 text-center font-medium">{quantity}</span>
                <button 
                  class="w-10 h-10 border border-tech-gray-300 rounded-lg flex items-center justify-center hover:bg-tech-gray-50 disabled:opacity-50"
                  on:click={() => quantity = Math.min(10, quantity + 1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          <!-- Stock Status -->
          <div class="flex items-center space-x-2">
            {#if product.inStock}
              <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-green-600 font-medium">
                In Stock ({product.stockCount} available)
              </span>
            {:else}
              <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span class="text-red-600 font-medium">Out of Stock</span>
            {/if}
          </div>
          
          <!-- Add to Cart -->
          <div class="flex space-x-4">
            <div class="flex-1">
              <Button 
                size="lg" 
                disabled={!product.inStock}
                on:click={addToCart}
              >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"/>
              </svg>
              Add to Cart
              </Button>
            </div>
            <button class="p-4 border border-tech-gray-300 rounded-lg hover:bg-tech-gray-50 transition-colors">
              <svg class="w-6 h-6 text-tech-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Product Details Tabs -->
  <section class="py-12 border-t border-tech-gray-200">
    <div class="section-padding">
      <div class="max-w-4xl mx-auto">
        <!-- Features -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-tech-gray-900 mb-6">Key Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each product.features as feature}
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-tech-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-tech-gray-700">{feature}</span>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Specifications -->
        <div>
          <h2 class="text-3xl font-bold text-tech-gray-900 mb-6">Specifications</h2>
          <div class="bg-tech-gray-50 rounded-2xl p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {#each Object.entries(product.specifications) as [key, value]}
                <div class="flex justify-between items-center py-2 border-b border-tech-gray-200 last:border-b-0">
                  <span class="font-medium text-tech-gray-900">{key}</span>
                  <span class="text-tech-gray-700 text-right">{value}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Related Products -->
  <section class="py-20 bg-tech-gray-50">
    <div class="section-padding">
      <h2 class="text-3xl md:text-4xl font-bold text-tech-gray-900 text-center mb-12">
        You Might Also Like
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {#each relatedProducts as relatedProduct}
          <ProductCard product={relatedProduct} />
        {/each}
      </div>
    </div>
  </section>

{:else}
  <!-- Product Not Found -->
  <section class="py-20 text-center">
    <div class="section-padding">
      <h1 class="text-4xl font-bold text-tech-gray-900 mb-4">Product Not Found</h1>
      <p class="text-xl text-tech-gray-600 mb-8">
        The product you're looking for doesn't exist or has been removed.
      </p>
      <Button href="/products">
        Browse All Products
      </Button>
    </div>
  </section>
{/if}
