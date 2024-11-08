<script lang="ts">
    // Array of headphones in the store
    const headphones = [
        {
            name: 'Noise Cancelling Headphones',
            price: '$299',
            description: 'Experience immersive sound with active noise cancellation.',
            image: 'shop/noise cancelling headphones.jpg'
        },
        {
            name: 'Wireless Bluetooth Headphones',
            price: '$199',
            description: 'Wireless freedom with high-quality audio and long battery life.',
            image: 'shop/wireless bluetooth headphones.jpg'
        },
        {
            name: 'Over-Ear Headphones',
            price: '$149',
            description: 'Perfect for studio monitoring and professional use.',
            image: 'shop/over ear headphones.jpg'
        },
        {
            name: 'In-Ear Sports Headphones',
            price: '$79',
            description: 'Designed for active lifestyles, with sweat resistance.',
            image: 'shop/in ear headphones.jpg'
        }
    ];

    // Variables for form inputs
    let name = '';
    let email = '';
    let phone = '';
    let product = '';
    let quantity = 1;
    let additionalInfo = '';

    // Find selected headphone details for display
    function getSelectedHeadphone() {
        return headphones.find(headphone => headphone.name === product);
    }

    function validateAndSubmit() {
        if (!name || !email || !phone || !product || quantity < 1) {
            alert("Please fill in all required fields and ensure quantity is valid.");
            return;
        }
        alert("Form submitted successfully!");
    }
</script>

<main class="p-6 md:p-12 bg-[#f7f9fc] min-h-screen flex justify-center items-center">
    <div class="flex flex-col lg:flex-row gap-10 w-full max-w-4xl">
        <!-- Form Section -->
        <form on:submit|preventDefault={validateAndSubmit} class="space-y-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-[#003CFF]">
            <h1 class="text-2xl font-bold text-center text-[#003CFF] mb-4">Purchase Your Headphones</h1>
            
            <div>
                <label class="block text-gray-700 font-medium mb-2" for="name">Name</label>
                <input id="name" type="text" bind:value={name} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2" for="email">E-mail</label>
                <input id="email" type="email" bind:value={email} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2" for="phone">Phone Number</label>
                <input id="phone" type="tel" bind:value={phone} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" required />
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2" for="product">Select Product</label>
                <select id="product" bind:value={product} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="" disabled selected>Select a product</option>
                    {#each headphones as headphone}
                        <option value={headphone.name}>{headphone.name} - {headphone.price}</option>
                    {/each}
                </select>
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2" for="quantity">Quantity</label>
                <input id="quantity" type="number" bind:value={quantity} min="1" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2" for="additionalInfo">Additional Information</label>
                <textarea id="additionalInfo" bind:value={additionalInfo} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Any additional information" rows="4"></textarea>
            </div>

            <button type="submit" class="w-full bg-[#003CFF] text-white font-semibold py-3 rounded-lg hover:bg-[#1a202c] transition-colors duration-300">
                Submit
            </button>
        </form>

        <!-- Selected Headphone Preview Section -->
        {#if product}
            <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-md w-full">
                <div class="w-full h-64 overflow-hidden rounded-lg mb-4 bg-gray-100 flex justify-center items-center">
                    <img src={getSelectedHeadphone()?.image || ''} alt={getSelectedHeadphone()?.name || 'Selected Product'} class="w-full h-full object-contain" />
                </div>
                    <h2 class="text-xl font-semibold text-[#1a202c]">{getSelectedHeadphone()?.name || 'Product Name'}</h2>
                    <p class="text-gray-600 mt-2">{getSelectedHeadphone()?.description || 'Product Description'}</p>
                    <p class="text-[#003CFF] font-medium mt-2">{getSelectedHeadphone()?.price || 'Product Price'}</p>
            </div>
        {/if}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
