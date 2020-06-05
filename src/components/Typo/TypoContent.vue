<template>
  <div class="typo-content">
    <div class="typo-content-element big">
      <div class="left">
        <h6>Grand</h6>
        <p>Introductions</p>
      </div>
      <p class="example">
        L’objectif de Yuka est d’aider les consommateurs à faire de meilleurs choix pour leur santé et représenter un levier d’action pour conduire les industriels à proposer de meilleurs produits.
      </p>
    </div>
    <div class="typo-content-element medium">
      <div class="left">
        <h6>Moyen</h6>
        <p>Texte courant</p>
      </div>
      <p class="example">
        L’objectif de Yuka est d’aider les consommateurs à faire de meilleurs choix pour leur santé et représenter un levier d’action pour conduire les industriels à proposer de meilleurs produits.
      </p>
    </div>
    <div class="typo-content-element small">
      <div class="left">
        <h6>Petit</h6>
        <p>Badges</p>
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

<style lang="less" scoped>
.typo-content-element {
  &.small .example {
    font-size: var(--text-sm);
  }
  &.medium .example {
    font-size: var(--text-md);

  }
  &.big .example {
    font-size: var(--text-lg);
  }
}
</style>
