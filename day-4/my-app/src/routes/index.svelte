<style>
  * {
    background-color: darkslateblue;
    text-align: center;
    padding: 20px;
  }

  .house {
    font-size: 8em;
    color: cornflowerblue;
  }

	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script>
  let house = '';
  let houseIsSet = false;
  let name = '';

  const handleHouseSelectClick = (e) => {
    houseIsSet = true;
    if(name.toLowerCase() === 'dan') {
      house = 'RAVENCLAW!!!';
    } else if (name === 'ramya') {
      house = 'hufflepuff';
    }
    else {
      fetch('https://www.potterapi.com/v1/sortingHat')
      .then(response => response.json())
      .then(data => {
        house = data
      });
    }
  }
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

{#if houseIsSet}
<div id="result">
  <h1>Your house is:</h1>
  <h2 class="house">{house}</h2>
</div>
{:else}
<div id="prompt">
  <h1>Please select your house</h1>
  <input bind:value={name} placeholder="Enter your name">
  <button on:click={handleHouseSelectClick}>
    Sorting Hat Magic
  </button>
</div>
{/if}