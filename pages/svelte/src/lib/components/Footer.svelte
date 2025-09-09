<script lang="ts">
  const footerLinks = {
    'Shop and Learn': [
      'Laptops',
      'Tablets',
      'Smartphones',
      'Smartwatches',
      'Headphones',
      'Smart Home',
      'Accessories'
    ],
    'Services': [
      'Online Store',
      'Digital Wallet',
      'Rewards Card',
      'Streaming Service',
      'Cloud Storage',
      'Gaming Platform',
      'Tech Support'
    ],
    'Account': [
      'Manage Your Account',
      'Order History',
      'Cloud Dashboard',
      'Customer Support',
      'Contact Us'
    ],
    'Company': [
      'About TechHub',
      'Newsroom',
      'Leadership Team',
      'Career Opportunities',
      'Investors',
      'Ethics & Compliance'
    ]
  };
  
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01m-4.5 0a5 5 0 105 5 5 5 0 00-5-5zM12 7a5 5 0 105 5 5 5 0 00-5-5z' },
    { name: 'YouTube', href: '#', icon: 'M23 12s0-3.85-.46-5.58a2.9 2.9 0 00-2.05-2.05C18.8 4 12 4 12 4s-6.8 0-8.49.37a2.9 2.9 0 00-2.05 2.05C1 8.15 1 12 1 12s0 3.85.46 5.58a2.9 2.9 0 002.05 2.05C5.2 20 12 20 12 20s6.8 0 8.49-.37a2.9 2.9 0 002.05-2.05C23 15.85 23 12 23 12z' }
  ];
</script>

<footer class="bg-tech-gray-100 border-t border-tech-gray-200">
  <div class="section-padding py-12">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {#each Object.entries(footerLinks) as [category, links]}
        <div>
          <h3 class="font-semibold text-tech-gray-900 mb-4">{category}</h3>
          <ul class="space-y-2">
            {#each links as link}
              <li>
                <a href="#" class="text-tech-gray-600 hover:text-tech-blue transition-colors text-sm">
                  {link}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    
    <!-- Newsletter Signup -->
    <div class="border-t border-tech-gray-200 pt-8 mb-8">
      <div class="max-w-md">
        <h3 class="font-semibold text-tech-gray-900 mb-2">Stay Updated</h3>
        <p class="text-tech-gray-600 text-sm mb-4">Get the latest news and exclusive offers.</p>
        <div class="flex">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-2 border border-tech-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
          />
          <button class="bg-tech-blue text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    
    <!-- Bottom Footer -->
    <div class="border-t border-tech-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div class="flex items-center mb-4 md:mb-0">
        <svg class="w-6 h-6 mr-2 text-tech-gray-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span class="text-tech-gray-700 text-sm">© 2024 TechHub. All rights reserved.</span>
      </div>
      
      <!-- Social Links -->
      <div class="flex space-x-4">
        {#each socialLinks as social}
          <a 
            href={social.href} 
            class="text-tech-gray-600 hover:text-tech-blue transition-colors"
            aria-label={social.name}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={social.icon}/>
            </svg>
          </a>
        {/each}
      </div>
    </div>
    
    <!-- Legal Links -->
    <div class="mt-4 pt-4 border-t border-tech-gray-200">
      <div class="flex flex-wrap justify-center md:justify-start space-x-6 text-xs text-tech-gray-500">
        <a href="#" class="hover:text-tech-blue transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-tech-blue transition-colors">Terms of Service</a>
        <a href="#" class="hover:text-tech-blue transition-colors">Cookie Policy</a>
        <a href="#" class="hover:text-tech-blue transition-colors">Accessibility</a>
        <a href="#" class="hover:text-tech-blue transition-colors">Site Map</a>
      </div>
    </div>
  </div>
</footer>
