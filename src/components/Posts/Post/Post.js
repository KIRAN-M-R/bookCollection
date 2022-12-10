import React from 'react'

const Post = ({post}) => {
  return (
    <div class="max-w-sm rounded bg-white m-5 overflow-hidden shadow-lg">
  <img class="w-full h-48" src={post.image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{post.bookName}</div>
    <p class="text-gray-700 text-base">
      {post.author}
    </p>
    <p class="text-gray-700 text-base">
      {post.price}
    </p>
    <p class="text-gray-700 text-base">
      {post.genre}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  )
}

export default Post