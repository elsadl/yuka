<template>
  <div class="typo-content">
    <div class="typo-content-element big">
      <div class="left">
        <h6>Grand</h6>
        <p>22px</p>
      </div>
      <p class="example">
        L’objectif de Yuka est d’aider les consommateurs à faire de meilleurs choix pour leur santé et représenter un levier d’action pour conduire les industriels à proposer de meilleurs produits.
      </p>
    </div>
    <div class="typo-content-element medium">
      <div class="left">
        <h6>Moyen</h6>
        <p>18px</p>
      </div>
      <p class="example">
        L’objectif de Yuka est d’aider les consommateurs à faire de meilleurs choix pour leur santé et représenter un levier d’action pour conduire les industriels à proposer de meilleurs produits.
      </p>
    </div>
    <div class="typo-content-element small">
      <div class="left">
        <h6>Petit</h6>
        <p>16px</p>
      </div>
      <p class="example">
        L’objectif de Yuka est d’aider les consommateurs à faire de meilleurs choix pour leur santé et représenter un levier d’action pour conduire les industriels à proposer de meilleurs produits.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypoContent",
};
</script>

<style scoped>
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
}

.typo-content-element:first-child {
  border-top: 1px solid var(--yuka-orange);
}

.typo-content-element .left {
  color: var(--yuka-orange);
  min-width: 80px;
}

.typo-content-element .left p {
font-weight: 300;
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

.typo-content-element.big .example {
    font-size: 1.2222em;
}

.typo-content-element.medium .example {
    padding-right: 20%;
}

.typo-content-element.small .example {
    font-size: 0.8888em;
    padding-right: 40%;
}


</style>
