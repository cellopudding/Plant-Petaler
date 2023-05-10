const db = require("../config/connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Indoor" },
    { name: "Outdoor" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "European Silver Fir",
      description:
        "This amazing fir eventually reaches considerable height, with a lovely, lush shape; its layered branches adorned with mid-green needles with silver undersides make it an eye-catching and beautiful evergreen addition to any landscape.",
      image:
        "https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg",
      watering: "Frequent",
      hardiness_zone: "7",
      sun: "Full Sun, Part Shade",
      maintenance: "n/a",
      care_level: "Medium",
      category: categories[1]._id,
      price: 3.5,
      quantity: 500,
    },
    {
      name: "Pyramidalis Silver Fir",
      description:
        "This variety of tree has a narrowly pyramidal shape when young, with dense, dark-green needles and silver undersides. Its compact, columnar form makes it ideal for small areas, making it a wonderful accent for any landscape.",
      image:
        "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
      watering: "Frequent",
      hardiness_zone: "4",
      sun: "Full Sun, Part Shade",
      maintenance: "n/a",
      care_level: "Medium",
      category: categories[1]._id,
      price: 6.99,
      quantity: 500,
    },
    {
      name: "Sunset Huskmallow",
      description:
        "This small, ornamental accent tree is quite uncommon and offers something for all seasons. In late spring, it produces drooping panicles of urn-shaped flowers, followed by similar seeds. In the fall, the tree provides a brilliant red color, along with a very distinctive habit. However, keep in mind that it requires very specific growing conditions.",
      image:
        "https://perenual.com/storage/species_image/412_abelmoschus_manihot/og/14884640072_2e21234175_b.jpg",
      watering: "Average",
      hardiness_zone: "8-10",
      sun: "Full Sun",
      maintenance: "Low",
      care_level: "Medium",
      category: categories[1]._id,
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Crimson Prince Japanese Maple",
      description:
        "An improved selection of the popular Bloodgood maple with richer red foliage that is more resistant to heat scorch so it tends to perform better in hot sun; dazzling fall color; a medium-sized accent tree for the smaller home landscape.",
      image:
        "https://perenual.com/storage/species_image/52_acer_palmatum_crimson_prince/og/1-1274349109Jjby.jpg",
      watering: "Frequent",
      hardiness_zone: "6",
      sun: "Full Sun, Part Shade",
      maintenance: "n/a",
      care_level: "Medium",
      category: categories[1]._id,
      price: 99.99,
      quantity: 25,
    },
    {
      name: "Sneezeweed",
      description:
        "This 2-5 ft., erect perennial has many elongate leaves and numerous flower heads. A winged stem bearing yellow, daisy-like flower heads with fan-shaped, drooping rays; disc flowers forming a conspicuous, greenish-yellow, ball-like structure at center of head. The flowers have raised centers and wedge-shaped, yellow petals which end in three teeth.",
      image:
        "https://perenual.com/storage/species_image/3364_helenium_bruno/og/52340894706_ab8553625b_b.jpg",
      watering: "Frequent",
      hardiness_zone: "3-8",
      sun: "Full Sun",
      maintenance: "Moderate",
      care_level: "Moderate",
      category: categories[1]._id,
      price: 79.5,
      quantity: 60,
    },
    {
      name: "Rattlesnake Master",
      description:
        "Scattered along the stiff, upright stem of this unusual perennial are tough, blue-green, yucca-like, parallel-veined leaves. Smooth, rigid stems bear thistle-like flower heads made up of small greenish-white florets mingled with pointed bracts. The individual, greenish-white flowers cluster into unique, globular heads. These occur on branch ends atop the 6 ft. plant.",
      image:
        "https://perenual.com/storage/species_image/2810_eryngium_yuccifolium/og/51507915961_da9407fd67_b.jpg",
      watering: "Minimum",
      hardiness_zone: "3-8",
      sun: "Full Sun",
      maintenance: "Low",
      care_level: "n/a",
      category: categories[1]._id,
      price: 49.5,
      quantity: 4,
    },
    {
      name: "Toad Lily",
      description:
        "Toad lily flowers are often borne on upright, arching stems. Foliage varies with cultivar, as does the color of toad lily flowers, although most have the spotted appearance for which toad lilies are recognized. The toad lily plant grows taller in soils that are consistently moist.",
      image:
        "https://perenual.com/storage/species_image/7936_tricyrtis_kohaku/og/6262198944_a0ea7a8ccc_b.jpg",
      watering: "Frequent",
      hardiness_zone: "4-8",
      sun: "Part Shade, Full Shade",
      maintenance: "Low",
      care_level: "Medium",
      category: categories[1]._id,
      price: 26.75,
      quantity: 100,
    },
    {
      name: "Checkerbloom",
      description:
        'Checker Bloom (Sidalcea malviflora) is a common native perennial herb in the Malvaceae (Mallow) family that grows in Northern, Southern and Central California, the Sierra Nevada and Sacramento Valley regions. It tends to grow in dry, open flats, at elevations from sea level to 7,500 feet. It has bright green palmate leaves and 1" deep pink flowers arranged vertically on a spike. There are several recognized subspecies with different geographic ranges and slightly differing characteristics.',
      image:
        "https://perenual.com/storage/species_image/7361_sidalcea_elsie_heugh/og/50575944472_833cf76a56_b.jpg",
      watering: "Average",
      hardiness_zone: "5-7",
      sun: "Full Sun",
      maintenance: "Moderate",
      care_level: "Medium",
      category: categories[1]._id,
      price: 29.99,
      quantity: 40,
    },
    {
      name: "Common Foxglove",
      description:
        "Common foxglove, Digitalis purpurea, is a biennial or short-lived herbaceous perennial from western Europe in the plantain family (Plantaginaceae, which now contains the former figwort family, Scrophulariaceae, this used to be part of) that grows in woodland clearings, mountainsides and especially on disturbed sites, as well as being used as a garden ornamental.",
      image:
        "https://perenual.com/storage/species_image/2489_digitalis_purpurea_excelsior_group/og/2560px-Digitalis_purpurea_Excelsior_Hybrids_3zz.jpg",
      watering: "Average",
      hardiness_zone: "4-8",
      sun: "Part Sun, Part Shade",
      maintenance: "Low",
      care_level: "Medium",
      category: categories[1]._id,
      price: 46.78,
      quantity: 50,
    },
    {
      name: "Cranesbill",
      description:
        'To the uninitiated, a "geranium" is that familiar annual plant so often found planted in cemetery urns, window boxes, and hanging baskets—a fleshy-leaved plant with long flower stalks and clustered blossoms. But, that plant, which often goes by the common name of "garden geranium" or "annual geranium," is actually a member of the Pelargonium genus of plants, and it has been since 1789, when the genus was separated from the Geranium genus.',
      image:
        "https://perenual.com/storage/species_image/3155_geranium_oxonianum_bressinghams_delight/og/52284276512_7421e5f12c_b.jpg",
      watering: "Average",
      hardiness_zone: "5-8",
      sun: "Full Sun, Part Shade",
      maintenance: "Moderate",
      care_level: "Medium",
      category: categories[1]._id,
      price: 24.99,
      quantity: 40,
    },

    {
      name: "Flowering Maple",
      description:
        "This small, ornamental accent tree is quite uncommon and offers something for all seasons. In late spring, it produces drooping panicles of urn-shaped flowers, followed by similar seeds. In the fall, the tree provides a brilliant red color, along with a very distinctive habit. However, keep in mind that it requires very specific growing conditions.",
      image:
        "https://perenual.com/storage/species_image/8480_abutilon_x_hybridum/og/11394506506_0a240e06a5_b.jpg",
      watering: "Frequent",
      hardiness_zone: "10",
      sun: "Full Sun, Part Shade",
      maintenance: "n/a",
      care_level: "Medium",
      category: categories[0]._id,
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Urn Plant",
      description:
        "The urn plant also has the common name of silver vase and is the most popular bromeliad from the Aechmea genus for growing and displaying indoors. The common names derive from the center of the plant being shaped like an urn or vase.",
      image:
        "https://perenual.com/storage/species_image/549_aechmea_fasciata/og/51446529161_03b99a881f_b.jpg",
      watering: "Average",
      hardiness_zone: "10-11",
      sun: "Part Shade",
      maintenance: "Moderate",
      care_level: "Moderate",
      category: categories[0]._id,
      price: 16.5,
      quantity: 10,
    },
    {
      name: "Zebra Plant",
      description:
        "The zebra plant, which typically grows indoors, is loved for its unique dark green leaves striped with white veins. The jewel of this plant is its colorful flowers. When in bloom (which usually happens in late summer or early autumn) a zebra plant bears tall golden bracts that can reach several inches long and number between two to four per plant, lasting up to six weeks. The indoor zebra plant is a slow-growing plant, reaching maturity of a couple of feet tall in three years.",
      image:
        "https://perenual.com/storage/species_image/861_aphelandra_squarrosa/og/9216112108_2bb5c403b3_b.jpg",
      watering: "Average",
      hardiness_zone: "11-12",
      sun: "Part Shade, Full Shade",
      maintenance: "Moderate",
      care_level: "Medium",
      category: categories[0]._id,
      price: 45.67,
      quantity: 34,
    },
    {
      name: "Rex Begonia",
      description:
        "Among the various types of begonias, Begonia rex is one of the most beautiful and dramatic plants. Sometimes called painted-leaf begonias or fancy-leaf begonias, these plants are known for their variegated leaves. They frequently have large leaves (up to 6 inches long) that are brightly colored in various shades of green, red, silver, and even purple.",
      image:
        "https://perenual.com/storage/species_image/1215_begonia_rex-cultorum_super_curl/og/28152488224_06e2aca626_b.jpg",
      watering: "Average",
      hardiness_zone: "10-11",
      sun: "Full Sun, Part Shade",
      maintenance: "Moderate",
      care_level: "High",
      category: categories[0]._id,
      price: 12.99,
      quantity: 150,
    },
    {
      name: "Venus Fly Trap",
      description:
        "The Venus flytrap is a flowering plant best known for its carnivorous eating habits. The “trap” is made of two hinged lobes at the end of each leaf. On the inner surfaces of the lobes are hair-like projections called trichomes that cause the lobes to snap shut when prey comes in contact with them.",
      image:
        "https://perenual.com/storage/species_image/2500_dionaea_muscipula_cup-shaped/og/49820887063_7c309b02a2_b.jpg",
      watering: "Frequent",
      hardiness_zone: "5-8",
      sun: "Full Sun, Part Shade",
      maintenance: "High",
      care_level: "Medium",
      category: categories[0]._id,
      price: 9.99,
      quantity: 60,
    },
    {
      name: "Sago Palm",
      description:
        "The sago palm may look like a tiny palm tree with its glossy, stiff fronds, but it is not a palm tree at all. Sago palms are cycads, some of the most ancient of plants that have been around since prehistoric times. They are easy to grow indoors as houseplants or outdoors in containers in warm areas. Dont let the mature height of these plants frighten you off. These slow-growers take many years to reach their final height.",
      image:
        "https://perenual.com/storage/species_image/2272_cycas_revoluta/og/26712271676_6dc6c5fabc_b.jpg",
      watering: "Average",
      hardiness_zone: "9-10",
      sun: "Full Sun, Part Shade",
      maintenance: "Low",
      care_level: "Medium",
      category: categories[0]._id,
      price: 15.99,
      quantity: 35,
    },
    {
      name: "Earth Star",
      description:
        "Earth Star is a native to Brazil boasting showy, bright pink leaves that form a star pattern. It is a bromelaid, which is a tropical plant having short stems with rosettes of stiff, spiny leaves.",
      image:
        "https://perenual.com/storage/species_image/2244_cryptanthus_group/og/black-mystic-starfish-plant-crytanthus-earth-star.jpg",
      watering: "Average",
      hardiness_zone: "10-12",
      sun: "Part Shade",
      maintenance: "Moderate",
      care_level: "Moderate",
      category: categories[0]._id,
      price: 32.6,
      quantity: 46,
    },
    {
      name: "Orchid",
      description:
        "Orchids are popular houseplants that typically can be started anytime for indoor growth, though repotting is best after flowering. Orchid care for beginners is somewhat easy, as long as you understand the plants ideal conditions and maintenance requirements.",
      image:
        "https://perenual.com/storage/species_image/2354_dendrobium_group/og/24982123521_e383f1921f_b.jpg",
      watering: "Average",
      hardiness_zone: "9-12",
      sun: "Part Shade",
      maintenance: "High",
      care_level: "High",
      category: categories[0]._id,
      price: 15.99,
      quantity: 99,
    },
    {
      name: "Dumb Cane",
      description:
        "Dieffenbachia is a genus of tropical perennials with several species that are commonly grown as houseplants. They feature pointed, ovate leaves in a variety of combinations of green, cream, and white colors. A large, well-grown dieffenbachia can reach 10 feet, with leaves 20 inches long. However, the plants will rarely reach this size in typical indoor conditions, where 3 to 5 feet is more common.",
      image:
        "https://perenual.com/storage/species_image/2468_dieffenbachia_seguine/og/24449059743_2aee995991_b.jpg",
      watering: "Average",
      hardiness_zone: "10-12",
      sun: "Filtered Shade",
      maintenance: "Moderate",
      care_level: "Medium",
      category: categories[0]._id,
      price: 24.99,
      quantity: 60,
    },
    {
      name: "Joseph's Coat",
      description:
        "These charming annuals dont have the most interesting or showy blooms, but they easily make up for it with their stunning, jewel-tone foliage. Josephs coat plants make a wonderful accent in any garden setting and can work well as showy houseplants. With several hundred species available, these plants offer many different leaf shapes, sizes, and textures. Plant them in full sun for the best and brightest foliage colors.",
      image:
        "https://perenual.com/storage/species_image/747_alternanthera_ficoidea/og/48756446498_fc5901c40d_b.jpg",
      watering: "Average",
      hardiness_zone: "10-11",
      sun: "Full Sun, Part Shade",
      maintenance: "Low",
      care_level: "Medium",
      category: categories[0]._id,
      price: 19.99,
      quantity: 70,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "John",
    lastName: "Smith",
    email: "jonhsmith@hotmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@hotmail.com",
    password: "password12345",
    orders: [
      {
        products: products[1]._id,
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
