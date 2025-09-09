<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';

	$: status = $page.status;
	$: message = $page.error?.message || 'An unexpected error occurred';
</script>

<svelte:head>
	<title>{status} - Page Not Found | TechHub</title>
	<meta name="description" content="The page you're looking for doesn't exist. Return to TechHub homepage to continue shopping." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-tech-gray-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full text-center">
		<!-- Error Icon -->
		<div class="mx-auto w-24 h-24 mb-8">
			<svg class="w-full h-full text-tech-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.072-2.329C3.64 10.031 1.999 7.191 2 4.72A7.98 7.98 0 0112 3a7.98 7.98 0 0110 1.72c.001 2.471-1.64 5.311-3.928 7.951-.993 1.148-2.427 2.329-4.072 2.329z" />
			</svg>
		</div>

		<!-- Error Content -->
		<div class="mb-8">
			<h1 class="text-6xl font-bold text-tech-gray-900 mb-4">
				{status || '404'}
			</h1>
			<h2 class="text-2xl font-semibold text-tech-gray-700 mb-4">
				{#if status === 404}
					Page Not Found
				{:else if status === 500}
					Internal Server Error
				{:else}
					Something Went Wrong
				{/if}
			</h2>
			<p class="text-tech-gray-600 mb-8 leading-relaxed">
				{#if status === 404}
					The page you're looking for doesn't exist or has been moved. Let's get you back to shopping for amazing tech products.
				{:else}
					{message}
				{/if}
			</p>
		</div>

		<!-- Action Buttons -->
		<div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
			<Button href="/" variant="primary" size="lg">
				<svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
				Go Home
			</Button>
			<Button href="/products" variant="outline" size="lg">
				<svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
				</svg>
				Shop Products
			</Button>
		</div>

		<!-- Additional Help -->
		<div class="mt-12 pt-8 border-t border-tech-gray-200">
			<p class="text-sm text-tech-gray-500 mb-4">
				Need help finding something?
			</p>
			<div class="flex flex-wrap justify-center gap-4 text-sm">
				<a href="/" class="text-tech-blue hover:text-blue-600 transition-colors">
					Homepage
				</a>
				<span class="text-tech-gray-300">•</span>
				<a href="/products" class="text-tech-blue hover:text-blue-600 transition-colors">
					All Products
				</a>
				<span class="text-tech-gray-300">•</span>
				<button 
					on:click={() => history.back()} 
					class="text-tech-blue hover:text-blue-600 transition-colors cursor-pointer"
				>
					Go Back
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	/* Add a subtle animation */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	div {
		animation: fadeInUp 0.6s ease-out;
	}
</style>
