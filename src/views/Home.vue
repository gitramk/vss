<template>
  <main>
    <div id="content" class="container-fluid">
      <div class=" hero hero--featured col-12">
        <div class="component-content">
          <div
            class="bg hero__bg js-prlx"
            data-paralax-max="200"
            data-paralax-inverse="true"
          >
            <picture>
              <source
                media="(min-width: 1024px)"
                srcset="https://mss-p-034-delivery.stylelabs.cloud/api/public/content/434414746f774d20b2c09c0ac2e0178c?v=acdb29a0"
              />
              <source
                media="(min-width: 480.1px) and (max-width:1024px)"
                srcset="https://mss-p-034-delivery.stylelabs.cloud/api/public/content/a69e9379993d491c86557b1f24463dfc?v=eb332afb"
              />
              <source
                media="(max-width: 480px)"
                srcset="https://mss-p-034-delivery.stylelabs.cloud/api/public/content/a7dd15b7553542109a829d964070ac77?v=6b520af1"
              />
              <img
                style="width: 100%"
                srcset="
                  https://mss-p-034-delivery.stylelabs.cloud/api/public/content/a7dd15b7553542109a829d964070ac77?v=6b520af1  375w,
                  https://mss-p-034-delivery.stylelabs.cloud/api/public/content/a69e9379993d491c86557b1f24463dfc?v=eb332afb  768w,
                  https://mss-p-034-delivery.stylelabs.cloud/api/public/content/434414746f774d20b2c09c0ac2e0178c?v=acdb29a0 1440w
                "
                src="https://mss-p-034-delivery.stylelabs.cloud/api/public/content/434414746f774d20b2c09c0ac2e0178c?v=acdb29a0"
                alt="Homepage-Hero-lrg-Gradient.jpg"
                sizes="(max-width: 480px) 375px, 100vw, 1440px"
              />
            </picture>
          </div>
          <div
            class="hero__content container pad-lg-tb d-flex justify-content-center align-items-center"
          >
            <div class="row">
              <div
                class="lambda-bg js-prlx"
                data-paralax-max="200"
                data-paralax-inverse="true"
                data-paralax-initial-offset="100"
              >
                <div class="col-12">
                  <h1 class="t-xl text-center">THE 4X4 BUILT ON PURPOSE</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped src="@/assets/css/pre.css"></style>
