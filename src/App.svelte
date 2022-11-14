<script>
  import Accordion from "./lib/UI/Accordion.svelte";
  const mysteries = ["GOZOSOS", "DOLOROSOS", "GLORIOSOS", "LUMINOSOS"];
  let idx = 0
  $: mystery = mysteries[idx];
  function handleClick(num) {
    idx = (mod((idx + num) - 4, 4));
    console.log(idx)
  }
  function mod(n, m) { // JS modulo replacement, because % returns negative numbers for some reason....
    return ((n % m) + m) % m;
  }
</script>

<!-- https://wireframe.cc/d508KE -->
<!-- https://svelte.dev/repl/c109f83f3c114cb7829f04fe2440ef94?version=3.52.0 -->
<main>
  <h1>Novena de 54 Días</h1>
  <Accordion>
    <h3 slot="header">CREDO</h3>
    <p slot="content">
      Creo en Dios, Padre Todopoderoso, creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén
    </p>
  </Accordion>
  <Accordion>
    <h3 slot="header">PADRE NUESTRO</h3>
    <p slot="content">
      Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día y perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.
    </p>
  </Accordion>
  <Accordion>
    <h3 slot="header">3 AVE MARÍAS</h3>
    <p slot="content"><strong>Por la fe, la esperanza, y la caridad:</strong>
      Dios te salve, María, llena eres de gracia;
      el Señor es contigo. Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.
      Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén</p>
  </Accordion>

  <nav>
    <button on:click={() => handleClick(-1)}>&lt;</button>
    <h3>MISTERIOS {mystery}</h3>
    <button on:click={() => handleClick(1)}>&gt;</button>
  </nav>

  {#if idx == 0} <!-- joyful -->
    <Accordion>
      <h3 slot="header">AL COMENZAR</h3>
      <p slot="content">
        ¡Dios te salve, Reina del Santísimo Rosario, Madre María, Dios te salve! A tus pies me arrodillo humildemente para ofrecerte una Corona de Rosas blancas como la nieve, para recordarte tus alegrías. Cada rosa es para recordarte un misterio gozoso, cada decena la enlazo a mi petición de una gracia particular.
      </p>
    </Accordion>
  {:else if idx == 1} <!-- sorrowful -->
    <Accordion>
      <h3 slot="header">AL COMENZAR</h3>
      <p slot="content">
        ¡Dios te salve, Reina del Santísimo Rosario, Madre María, Dios te salve! A tus pies me arrodillo humildemente para ofrecerte una corona de rosas color rojo sangre para recordarte la pasión de tu divino Hijo, con quien tan plenamente participaste de su amargura. Cada rosa es para recordarte un misterio doloroso, cada decena la enlazo a mi petición de una gracia particular.
      </p>
    </Accordion>
  {:else if idx == 2} <!-- glorfious -->
    <Accordion>
      <h3 slot="header">AL COMENZAR</h3>
      <p slot="content">
        ¡Dios te salve, Reina del Santísimo Rosario, Madre María, Dios te salve! A tus pies me arrodillo humildemente para ofrecerte una corona de rosas blancas teñidas con el rojo de la pasión, para recordarte tus glorias, frutos de los sufrimientos de tu Hijo y tuyos. Cada rosa es para recordarte un misterio glorioso, cada decena la enlazo a mi petición de una gracia particular.
      </p>
    </Accordion>
  {:else if idx == 3} <!-- luminous -->
    <Accordion>
      <h3 slot="header">AL COMENZAR</h3>
      <p slot="content">
        ¡Dios te salve, Reina del Santísimo Rosario, Madre María, Dios te salve! A tus pies me arrodillo humildemente para ofrecerte una corona de brillantes rosas amarillas, para recordarte el ministerio de tu Hijo, frutos de los sufrimientos de tu Hijo y tuyos. Cada rosa es para recordarte un misterio luminoso, cada decena la enlazo a mi petición de una gracia particular.
      </p>
    </Accordion>
  {/if}

  <Accordion>
    <h3 slot="header">EN PETICIÓN</h3>
    <p slot="content">
      Oh Reina Santa, dispensadora de las gracias de Dios y Madre de todos los que te invocan, no puedes mirar mi ofrenda sin unirla a mi petición. Así como recibas mi ofrenda, así sé que recibirás mi petición; de tu generosidad me darás el favor que con tanta seriedad y confianza busco. No desespero de nada de lo que te pido. ¡Muéstrate, Madre mía!
    </p>
  </Accordion>
  <Accordion>
    <h3 slot="header">EN ACCIÓN DE GRACIAS</h3>
    <p slot="content">
      Oh Reina Santa, dispensadora de las gracias de Dios y Madre de todos los que te invocan, no puedes mirar mi ofrenda y sin ver mi compromiso. Así como recibas mi ofrenda, así sé que recibirás mi acción de gracias; de tu generosidad me has concedido el favor que buscaba con tanta seriedad y confianza. No desesperé de lo que te pedí, y verdaderamente te has mostrado, Madre mía.
    </p>
  </Accordion>

  <div class="mysteries">
    {#if idx == 0} <!-- joyful -->
      <Accordion>
        <h3 slot="header">1 La Anunciación</h3>
        <p slot="content">
          <b>Al iniciar:</b> Dulce Madre María, meditando en el Misterio de la Anunciación, cuando te visitó el ángel Gabriel con la noticia de que te convertirías en la Madre de Dios y te saludó con ese saludo sublime: "¡Salve, llena de gracia! ¡El Señor está contigo!" y te sometiste humildemente a la voluntad del Padre, respondiendo: "He aquí la esclava del Señor. Hágase en mí según tu palabra", rezo humildemente.
          <br>
          <br>
          <b>Al terminar:</b> Ato estas rosas blancas como la nieve con una petición por la virtud de la humildad y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">2 La Visitación</h3>
        <p slot="content">
          <b>Al iniciar:</b> Dulce Madre María, meditando en el Misterio de la Visitación, cuando, en tu visita a tu santa prima Isabel, te saludó con la palabra profética: "¡Bendita tú entre todas las mujeres, y bendito el fruto de tu vientre!" y respondiste con ese cántico de cánticos, el Magnificat, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas blancas como la nieve con una petición por la virtud de la caridad y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">3 El Nacimiento De Jesús</h3>
        <p slot="content">
          <b>Al iniciar:</b> Dulce Madre María, meditando en el Misterio de la Natividad de Nuestro Señor, cuando, llegado el momento, diste a luz, Virgen Santa, al Redentor del mundo en un establo de Belén; con lo cual coros de ángeles llenaron los Cielos con su exultante canto de alabanza: "Gloria a Dios en las alturas, y en la tierra paz a los hombres de buena voluntad”, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas blancas como la nieve con una petición por la virtud de desapego del mundo y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">4 La Presentación Del Niño Jesús</h3>
        <p slot="content">
          <b>Al iniciar:</b> Dulce Madre María, meditando en el Misterio de la Presentación, cuando, en obediencia a la Ley de Moisés, presentaste al Niño en el templo, donde el santo profeta Simeón, tomando al Niño en sus brazos, dio gracias a Dios por permitirle ver a Su Salvador, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas blancas como la nieve con una petición por la virtud de la pureza y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">5 Jesús Es Hallado En El Templo</h3>
        <p slot="content">
          <b>Al iniciar:</b> Dulce Madre María, meditando en el Misterio del Hallazgo del Niño Jesús en el Templo, cuando, habiéndolo buscado durante tres días, angustiada y ansiosa por Su ausencia, tu corazón se alegró al encontrarlo en el templo hablando con los maestros, y a petición tuya, regresó obedientemente a casa, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas blancas como la nieve con una petición por la virtud de la obediencia a la voluntad de Dios y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
    {:else if idx == 1} <!-- sorrowful -->
      <Accordion>
        <h3 slot="header">1 La Oración En El Huerto De Los Olivos</h3>
        <p slot="content">
          <b>Al iniciar:</b> Madre Dolorosa, María, meditando en el Misterio de la Agonía de Nuestro Señor, cuando, en el Huerto de los Olivos, vio los pecados del mundo desplegados ante Él por Satanás, quien trató de disuadirlo del sacrificio que estaba a punto de hacer; cuando Su alma se llenó de terror, y Su preciosa sangre fluyó por cada poro ante la visión de la tortura y la muerte que Él iba a sufrir, tus propios sufrimientos, querida Madre, los sufrimientos futuros de Su Iglesia, y Sus propios sufrimientos en el Santísimo Sacramento, gritó angustiado: "¡Abba! ¡Padre! ¡Si es posible, pase de Mí este cáliz!"; pero, resignándose inmediatamente a la voluntad de Su Padre, oró: "¡No sea lo que yo quiero, sino lo que quieras tú!", rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas rojo sangre con una petición por la virtud de la resignación a la voluntad de Dios y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">2 La Flagelación</h3>
        <p slot="content">
          <b>Al iniciar:</b> Madre Dolorosa, María, meditando en el Misterio de la Flagelación de Nuestro Señor cuando, por orden de Pilato, tu divino Hijo, despojado y atado a una columna, fue lacerado de pies a cabeza con crueles azotes y su carne desgarrada hasta que su cuerpo mortificado ya no soportaba más, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas rojo sangre con una petición por la virtud de la mortificación y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">3 La Coronación De Espinas</h3>
        <p slot="content">
          <b>Al iniciar:</b> Madre Dolorosa, María, meditando sobre el Misterio de la Coronación de Espinas de Nuestro Señor, cuando los soldados, atando Su cabeza con una corona de agudas espinas, le dieron golpes, clavándole las espinas profundamente en la cabeza; luego, en fingida adoración, se postraron ante Él, gritando: "¡Salve, Rey de los judíos!", rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas rojo sangre con una petición por la virtud de la humildad y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">4 Jesús Carga Con La Cruz</h3>
        <p slot="content">
          <b>Al iniciar:</b> Madre Dolorosa, María, meditando en el Misterio de la Carga de la Cruz, cuando, con la pesada madera de la Cruz sobre sus hombros, tu divino Hijo fue arrastrado, débil y sufriente, pero paciente, por las calles, en medio de las injurias del pueblo, al Calvario; cayendo a menudo y empujado por los crueles golpes de sus verdugos, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas rojo sangre con una petición por la virtud de la paciencia en la adversidad y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">5 La Crucifixión</h3>
        <p slot="content">
          <b>Al iniciar:</b> Madre Dolorosa, María, meditando en el Misterio de la Crucifixión, cuando tu divino Hijo fue clavado en la Cruz, sobre la cual murió después de tres horas de indescriptible agonía, tiempo durante el cual suplicó a Su Padre el perdón de sus enemigos, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas rojo sangre con una petición por la virtud del amor a nuestros enemigos y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
    {:else if idx == 2} <!-- glorious -->
      <Accordion>
        <h3 slot="header">1 La Resurrección Del Señor</h3>
        <p slot="content">
          <b>Al iniciar:</b> Gloriosa Madre María, meditando en el Misterio de la Resurrección de Nuestro Señor, cuando, en la mañana del tercer día después de Su muerte y entierro, resucitó de entre los muertos, Madre querida, y llenó tu corazón con gozo inefable y se apareció a las santas mujeres y a sus discípulos, quienes lo adoraron como su Dios resucitado, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas teñidas con el rojo de la pasión con una petición por la virtud de la fe y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">2 La Ascensión Del Señor</h3>
        <p slot="content">
          <b>Al iniciar:</b> Gloriosa Madre María, meditando en el Misterio de la Ascensión, cuando tu divino Hijo, después de cuarenta días en la Tierra, fue al Monte de los Olivos acompañado de Sus discípulos, donde lo adoraron por última vez, después de lo cual prometió permanecer con ellos hasta El fin del mundo y luego, extendiendo sus manos sobre ellos en una última bendición, ascendió al cielo, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas teñidas con el rojo de la pasión con una petición por la virtud de la esperanza y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">3 La Venida Del Espíritu Santo</h3>
        <p slot="content">
          <b>Al iniciar:</b> Gloriosa Madre María, meditando sobre el Misterio de la Venida del Espíritu Santo, cuando, reunidos los Apóstoles en una casa de Jerusalén, el Espíritu Santo descendió sobre ellos en forma de lenguas de fuego, inflamando de fuego del amor divino los corazones de los Apóstoles, enseñándoles todas las verdades y dándoles el don de lenguas, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas teñidas con el rojo de la pasión con una petición por la virtud de la caridad y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">4 La Asunción De María</h3>
        <p slot="content">
          <b>Al iniciar:</b> Gloriosa Madre María, meditando en el Misterio de tu Asunción al Cielo, cuando, consumida por el deseo de estar unida a tu divino Hijo, tu alma se apartó de tu cuerpo y se unió a Él, Quien, por el excesivo amor que Él tenía por ti, Su Madre, cuyo cuerpo virginal fue Su primer tabernáculo, llevó ese cuerpo al Cielo y allí, en medio de las aclamaciones de los ángeles y santos, lo unió a tu alma, rezo humildemente
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas teñidas con el rojo de la pasión con una petición por la virtud de la unión con Cristo y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">5 La Coronación De María</h3>
        <p slot="content">
          <b>Al iniciar:</b> Gloriosa Madre María, meditando en el Misterio de tu Coronación en el Cielo, cuando, al ser levantada, fuiste coronada triplemente como la Majestuosa Reina del Cielo por Dios Padre como Su amada hija, por Dios Hijo como Su querida Madre, y por Dios el Espíritu Santo como Su esposa elegida; la adoradora más perfecta de la Santísima Trinidad, abogando por nuestra causa como nuestra Madre poderosa y misericordiosa, a través de ti, rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas rosas teñidas con el rojo de la pasión con una petición por la virtud de la unión contigo y humildemente pongo este ramo a tus pies.
          </p>
      </Accordion>
    {:else if idx == 3} <!-- luminous -->
      <Accordion>
        <h3 slot="header">1 El Bautismo De Jesús</h3>
        <p slot="content">
          <b>Al iniciar:</b> Valiente Madre María, meditando en el Misterio del Bautismo de Jesús en el río Jordán, cuando tu Hijo, como ejemplo para todos, insistió en ser bautizado por su primo Juan y el Cielo se abrió y el Espíritu Santo descendió sobre él en forma de paloma y una voz del Cielo dijo: "Tú eres mi Hijo amado en quien complazco", rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas brillantes rosas amarillas con una petición por la virtud de la apertura al Espíritu Santo y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">2 La Autorrevelación En Las Bodas De Caná</h3>
        <p slot="content">
          <b>Al iniciar:</b> Valiente Madre María, meditando en el Misterio del Primer Milagro de Jesús en la Fiesta de las Bodas de Caná, cuando a tu insistencia, tu Hijo realizó el primero de Sus muchos milagros al ayudar a una pareja a celebrar su matrimonio, convirtiendo el agua en vino de tal calidad que el mayordomo reprendió al anfitrión diciendo: "Por lo general, la gente sirve el mejor vino primero y guarda el vino más barato para el final, pero tú has guardado el vino elegido para el final", rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas brillantes rosas amarillas con una petición por la virtud de manifestación a través de la fe y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">3 El Anuncio Del Reino De Dios</h3>
        <p slot="content">
          <b>Al iniciar:</b> Valiente Madre María, meditando en el Misterio del Anuncio del Reino de Dios, cuando tu Hijo reveló que el Reino de Dios ya ha comenzado "dentro de nosotros" y estamos llamados a la conversión y al perdón, rezando "Venga a nosotros Tu Reino, hágase Tu voluntad en la Tierra como en el Cielo", rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas brillantes rosas amarillas con una petición por la virtud de confiar en Dios y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">4 La Transfiguración</h3>
        <p slot="content">
          <b>Al iniciar:</b> Valiente Madre María, meditando en el Misterio de la Transfiguración, cuando tu Hijo reveló Su gloria a tres de Sus discípulos, apareciendo en el monte con Moisés y Elías, Su rostro resplandeciente como el sol y una voz del cielo que proclamaba: "Este es mi Hijo amado, escúchenlo", rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas brillantes rosas amarillas con una petición por la virtud del deseo de santidad y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
      <Accordion>
        <h3 slot="header">5 La Institución De La Eucaristía</h3>
        <p slot="content">
          <b>Al iniciar:</b> Valiente Madre María, meditando en el Misterio de la Institución del Sacramento de la Eucaristía, cuando el día antes de morir tu Hijo celebró la Pascua con Sus discípulos y tomó pan y se lo dio diciendo: "Tomen y coman; esto es Mi cuerpo" y cuando terminó la cena tomó una copa de vino y la compartió con ellos diciendo: "Tomen y beban; esto es Mi sangre, que será entregada por ustedes; hagan esto en memoria mía", rezo humildemente.
          <br>
          <br>
          <b>Al finalizar:</b> Ato estas brillantes rosas amarillas con una petición por la virtud de la adoración de la Eucaristía y humildemente pongo este ramo a tus pies.
        </p>
      </Accordion>
    {/if}
  </div>

  <Accordion>
    <h3 slot="header">Oraciónes Finales</h3>
    <p slot="content">
      <b>Salve Regina</b>
      <br>
      Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh, clementísima, oh piadosa, oh dulce Virgen María!
      <br>
      <br>
      <b>Oración Final</b>
      <br>
      Oh Dios, cuyo Hijo unigénito, por su vida, muerte y resurrección, ha comprado para nosotros las recompensas de la vida eterna, concede, te suplicamos, que meditando en estos misterios del Santísimo Rosario de la Santísima Virgen María, Pueden imitar lo que contienen y obtener lo que prometen, a través del mismo Cristo Nuestro Señor. Amén.
      <br>
      <br>
      <b>Oración de Comunión Espiritual</b>
      <br>
      Creo, Jesús mío, que estás realmente presente en el Santísimo Sacramento del Altar. Te amo sobre todas las cosas y deseo recibirte en mi alma. Pero como ahora no puedo recibirte sacramentado, ven al menos espiritualmente a mi corazón. Y como si ya te hubiese recibido, te abrazo y me uno del todo a Ti. Señor, no permitas que jamás me aparte de Ti. Amén.
      <br>
      <br>
      <b>En petición (primeros 27 días):</b> Dulce Madre María, te ofrezco esta comunión espiritual para atar mis ramos de rosas en una corona para colocar sobre tu frente. ¡Oh Madre mía! Mira con ternura mi regalo, y en tu amor obtén para mí (pronunciar la petición).
      <br>
      <br>
      <b>En acción de gracias (últimos 27 días):</b> Dulce Madre María, te ofrezco esta Comunión Espiritual para atar mis ramos de rosas en una corona para colocar sobre tu frente en acción de gracias por (pronunciar la petición) que tú en tu amor has obtenido para mí.
    </p>
  </Accordion>
</main>
<footer>Made using the prayers from rezoelrosario.com rosarycenter.org and vaticannews.va/es/oraciones.html</footer>

<style>
  h1 {
    text-align: center;
    padding: 0.25em 0;
    color: var(--primary);
  }
  nav {
    display: flex;
    justify-content: space-between;
    margin: 1em 2em;
  }
  button {
    padding: 0 0.5em;
    border: none;
    background: none;
    font-weight: bold;
  }
  h3 {
    text-align: justify;
    color: var(--primary);
  }
  main {
    min-height: 90vh;
  }
  footer {
    text-align: center;
    color: var(--footer);
    font-size: small;
    margin: 0 2em;
  }
</style>
