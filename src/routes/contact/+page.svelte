<script lang="ts">
    // Variables for form inputs
    let name = '';
    let email = '';
    let phone = '';
    let inquiryType = '';
    let subject = '';
    let message = '';
    let orderNumber = '';

    function validateAndSubmit() {
        if (!name || !email || !phone || !inquiryType || !subject || !message) {
            alert("Please fill in all required fields.");
            return;
        }
        alert("Contact form submitted successfully!");
    }
</script>

<main class="p-6 md:p-12 bg-[#f7f9fc] min-h-screen flex justify-center items-center">
    <div class="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#003CFF]">
        <h1 class="text-2xl font-bold text-center text-[#003CFF] mb-6">Customer Service Contact Form</h1>

        <!-- Contact Form -->
        <form on:submit|preventDefault={validateAndSubmit} class="space-y-6">
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
                <label class="block text-gray-700 font-medium mb-2" for="inquiryType">Inquiry Type</label>
                <select id="inquiryType" bind:value={inquiryType} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="" disabled selected>Select an inquiry type</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Support</option>
                    <option value="order">Order Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2" for="orderNumber">Order Number (if applicable)</label>
                <input id="orderNumber" type="text" bind:value={orderNumber} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your order number" />
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2" for="subject">Subject</label>
                <input id="subject" type="text" bind:value={subject} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the subject of your inquiry" required />
            </div>

            <div>
                <label class="block text-gray-700 font-medium mb-2" for="message">Message</label>
                <textarea id="message" bind:value={message} class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your issue or inquiry in detail" rows="6" required></textarea>
            </div>

            <button type="submit" class="w-full bg-[#003CFF] text-white font-semibold py-3 rounded-lg hover:bg-[#1a202c] transition-colors duration-300">
                Submit
            </button>
        </form>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
