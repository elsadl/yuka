<template>
  <div class="typo-content">
    <div class="typo-content-element big">
      <div class="left">
        <h6>Grand</h6>
        <p>48px</p>
        <p>800</p>
      </div>
      <h1 class="example">
        Scannez les étiquettes de vos produits alimentaires et cosmétiques
      </h1>
    </div>
    <div class="typo-content-element medium">
      <div class="left">
        <h6>Moyen</h6>
        <p>36px</p>
        <p>500</p>
      </div>
      <h3 class="example">
        Scannez les étiquettes de vos produits alimentaires et cosmétiques
      </h3>
    </div>
    <div class="typo-content-element small">
      <div class="left">
        <h6>Petit</h6>
        <p>24px</p>
        <p>500</p>
      </div>
      <h5 class="example">
        Scannez les étiquettes de vos produits alimentaires et cosmétiques
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypoHeader",
};
</script>

<style lang="less" scoped>
.typo-content {
  margin-top: 60px;
}

.typo-content-element {
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 20px;
  align-items: start;
  padding: 60px;
  border-bottom: 1px solid var(--yuka-orange);
  &:first-child {
    border-top: 1px solid var(--yuka-orange);
  }

  &.medium {
    .example {
  padding-right: 20%;
    }
  }

  &.small {
    .example {
  padding-right: 40%;
    }
  }

  .left {
    color: var(--yuka-orange);
    min-width: 80px;
    p {
      font-weight: 300;
    }
  }

  h6 {
    font-family: "Manrope", sans-serif;
    font-size: 1.2em;
    font-weight: 500;
  }

  p {
    padding: 0;
    margin: 0;
  }
}

</style>
