<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import type { HttpBinResponse } from '~/types/httpBinResponse';

interface PostBody {
  name: string;
  age: number;
  tags: Array<string>;
}

const isPostRequestSent = ref(false);

const { data: getData, pending: getIsPending } =
  useFetch<HttpBinResponse<string>>('https://httpbin.org/get');

const { data: delayedData, pending: delayedIsPending } = useFetch<HttpBinResponse<string>>(
  'https://httpbin.org/delay/3'
);

const { data: errorData, error } = useFetch('https://httpbin.org/status/403');

const {
  data: postData,
  pending: postIsPending,
  execute: executePost,
} = useFetch<HttpBinResponse<PostBody>>('https://httpbin.org/post', {
  method: 'post',
  body: {
    name: 'Yulia Shart',
    age: 25,
    tags: ['plumber', 'ribbon dancer', 'chair enthusiast'],
  },
  immediate: false,
});

function onSubmitPostRequest(): void {
  isPostRequestSent.value = true;
  executePost();
}
</script>

<template>
  <div class="border-2">
    <h1>GET request</h1>
    <h2>{{ getIsPending ? '...Loading' : getData?.origin }}</h2>
  </div>
  <div class="border-2">
    <h1>Delayed request</h1>
    <h2>{{ delayedIsPending ? '...Loading' : delayedData }}</h2>
  </div>
  <div class="border-2">
    <h1>Error request</h1>
    <h2>{{ errorData ?? 'no data' }}</h2>
    <h2 v-if="error">
      {{ error }}
    </h2>
  </div>
  <div class="border-2">
    <h1>POST request</h1>
    <button class="bg-blue-600 text-white p-4 rounded-2xl" @click="onSubmitPostRequest">
      Send post request
    </button>
    <h2 v-if="isPostRequestSent">
      {{ postIsPending ? 'Loading...' : `${postData?.data}` }}
    </h2>
  </div>
</template>
