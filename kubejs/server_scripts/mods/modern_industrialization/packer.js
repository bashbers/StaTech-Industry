ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let st = (id) => `statech:modern_industrialization/packer/${id}`;

    const REMOVED_RECIPE = [
        mi('materials/packer/mixed_ingot_blastproof')
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    let packer = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('packer'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        
        e.custom(newRecipe);
    }

    // -- CHAIN -- //
    packer(
        st('chain'),
        2,
        100,
        [
            { amount: 3, item: mi('iron_ring') }
        ],
        [
            { amount: 8, item: mc('chain') }
        ]
    );

    // -- MIXED BLASTPROOF INGOT -- //
    packer(
        st('mixed_blastproof_ingot'),
        32,
        600,
        [
            { amount: 1, item: mi('titanium_ingot') },
            { amount: 1, item: mi('tungsten_ingot') },
            { amount: 1, item: astra('ostrum_ingot') }
        ],
        [
            { amount: 1, item: mi('mixed_ingot_blastproof') }
        ]
    );
})