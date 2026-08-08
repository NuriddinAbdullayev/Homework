'use client';

import React, { useState, useEffect, useMemo, Suspense, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PRODUCTS } from '@/data/products';

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get values from URL query parameters
  const currentSearch = searchParams?.get('search') || '';
  const currentCategory = searchParams?.get('category') || 'All';
  const currentMinPrice = searchParams?.get('minPrice') || '';
  const currentMaxPrice = searchParams?.get('maxPrice') || '';

  // Local state for form controls
  const [search, setSearch] = useState(currentSearch);
  const [category, setCategory] = useState(currentCategory);
  const [minPrice, setMinPrice] = useState(currentMinPrice);
  const [maxPrice, setMaxPrice] = useState(currentMaxPrice);

  // Sync state when URL updates
  useEffect(() => {
    setSearch(currentSearch);
    setCategory(currentCategory);
    setMinPrice(currentMinPrice);
    setMaxPrice(currentMaxPrice);
  }, [currentSearch, currentCategory, currentMinPrice, currentMaxPrice]);

  // Handle Form Submission
  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category && category !== 'All') params.set('category', category);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);

    router.push(`/products?${params.toString()}`);
  };

  // Task 7: Clear Filters
  const handleClearFilters = () => {
    setSearch('');
    setCategory('All');
    setMinPrice('');
    setMaxPrice('');
    router.push('/products');
  };

  // Filtering Logic (Task 9 & Task 10)
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Task 9: Search by Name OR Price
      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().includes(search);

      // Task 10: Category filter
      const matchesCategory =
        category === 'All' || product.category === category;

      // Price Range filter
      const matchesMinPrice =
        !minPrice || product.price >= Number(minPrice);
      const matchesMaxPrice =
        !maxPrice || product.price <= Number(maxPrice);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }, [search, category, minPrice, maxPrice]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* Simple, natural page header */}
        <div className="border-b border-gray-200 pb-5">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Products</h1>
          <p className="text-sm text-gray-500 mt-1">Browse and filter available items.</p>
        </div>

        {/* Minimalist Filter Bar */}
        <form
          onSubmit={handleFilterSubmit}
          className="bg-gray-50 border border-gray-200 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
        >
          {/* Search Input (Task 9) */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              placeholder="Name or price..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 text-sm bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Category Select (Task 10) */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-1.5 text-sm bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            >
              <option value="All">All Categories</option>
              <option value="Phone">Phone</option>
              <option value="Laptop">Laptop</option>
              <option value="Headphones">Headphones</option>
              <option value="Watch">Watch</option>
            </select>
          </div>

          {/* Min Price */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Min Price ($)
            </label>
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-3 py-1.5 text-sm bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Max Price ($)
            </label>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3 py-1.5 text-sm bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-1.5 px-3 rounded transition"
            >
              Filter
            </button>

            {/* Task 7: Clear Filters */}
            <button
              type="button"
              onClick={handleClearFilters}
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm font-medium py-1.5 px-3 rounded transition"
            >
              Clear
            </button>
          </div>
        </form>

        {/* Task 8: Count display */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</span>
        </div>

        {/* Clean, standard product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:border-gray-300 transition"
              >
                <div>
                  <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center text-3xl mb-3">
                    {product.image}
                  </div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-2.5 py-1.5 rounded transition">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-gray-300 rounded-lg">
            <p className="text-sm text-gray-500">No products found matching your filters.</p>
            <button
              onClick={handleClearFilters}
              className="mt-2 text-xs text-gray-700 underline font-medium"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-xs text-gray-400">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}