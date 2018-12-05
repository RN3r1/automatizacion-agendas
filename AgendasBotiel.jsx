function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

var frases = [
  {
    "phrase": "Esta es la primera mañana de un nuevo año te quiero decir que estoy aquí para cuidar de ti. Ten fe y confía en que tus necesidades serán cubiertas ahora y en el futuro. Éste será un gran año para nosotros. Estoy a tu lado."
  },
  {
    "phrase": "Llamar a los ángeles es un poderoso camino para llevar luz y amor a toda situación. Estoy a tu lado en la calma y en el caos. Cuando desees serenidad respira profundo y apóyate en mí."
  },
  {
    "phrase": "Al despertar agradece y dedica tu día a algo, enfoca tu intención y envíala al universo como si fuera un gran anzuelo, descubre y disfruta los regalos que son fruto de tu dedicación."
  },
  {
    "phrase": "Dios creo a los ángeles como ayuda a las criaturas de la tierra, es tu derecho divino y tu privilegio, te asistimos a tomar control de tu vida y ajustar tus metas a la armonía, la abundancia, la salud las buenas relaciones y todo aquello que desea tu corazón."
  },
  {
    "phrase": "Permite a tu alma de niño soñar esta noche y pide a los reyes magos tu más grande deseo,"
  },
  {
    "phrase": "la manera en que celebras y agradeces lo que ahora tienes será tu mejor mensaje. La magia se manifiesta hasta cunado crees en ella."
  },
  {
    "phrase": "Cuando regalas bondad, tu energía se expande y logras tu verdadera libertad, esto debido a que la energía de agradecimiento de los demás hacia ti, eleva tu espíritu."
  },
  {
    "phrase": "Expresa la alegría de ser tú mismo, siente la calidez de tu corazón cuando lo haces y si necesitas algo, llámanos, estamos para ti las 24 horas del día."
  },
  {
    "phrase": "Recuerda que los ángeles podemos actuar en tu vida sólo cuando tenemos tu permiso. Pide ayuda al cielo en todo lo que tú quieras, entréganos tus preocupaciones y ten paciencia, la respuesta del cielo viene en camino."
  },
  {
    "phrase": "Todo fluye para ti en el momento preciso, libérate de las limitaciones. Deja de angustiarte con el tiempo y permite que todo fluya, el tiempo de Dios es perfecto."
  },
  {
    "phrase": "Dios es el proveedor infinito, cuando afirmas con claridad tus sueños y los entregas al universo, se hacen realidad enseguida. La ansiedad bloquea el flujo natural de las cosas. Como mensajeros divinos, te traemos mensajes de luz y amor."
  },
  {
    "phrase": "Los ángeles iluminamos tu mente y corazón con una gran infusión de luz. Te ayudamos a ver la verdad de cada situación y a alejarte de la apariencia de dolor y carencia. Cree y confía."
  },
  {
    "phrase": "Nosotros los ángeles te recordamos quien verdaderamente eres, tú eres una bendición para el mundo, en tu interior hay perfección, luz, amor y bondad. Eres GranDiosa."
  },
  {
    "phrase": "Da un paso a la vez, querer controlar todo es una señal de miedo y desconfianza, los ángeles te ayudamos a eliminar la falsa ilusión y a sanar todo, sin excepción."
  },
  {
    "phrase": "No necesitas luchar por nada en la vida, incluyendo tus retos materiales o tus finanzas, Dios brilla para ti en todo momento, apóyate en él y encuentra luz en la oscuridad. Cuando crees, creas, eres co-creador con Dios de tu plan divino de vida."
  },
  {
    "phrase": "Nosotros te asistimos en tu vida diaria, te guiamos hacia días más sanos y felices. Esto incluye ayudarte con noches de descanso reparador para mantener tu nivel de energía alto y permanezcas fiel a ti mismo y tu misión de vida."
  },
  {
    "phrase": "Tú eres uno con la Divinidad, piensa, actúa y habla honrando tu verdad. Eres un hijo del amor y Dios bendijo tu alma eterna. "
  },
  {
    "phrase": "Tu energía de amor es tan poderosa que puede sanarlo todo,  incluyendo tu presente y tu futuro. Tus oraciones por ti y por otros son el poder que sana y siempre son escuchadas."
  },
  {
    "phrase": "Elige palabras que reflejen lo que deseas realmente, tu naturaleza es amorosa, sé congruente, recuerda la facilidad con que hablabas con nosotros en tu infancia, vuelve a maravillarte de las pequeñas cosas. "
  },
  {
    "phrase": "Al comunicarte amorosamente, vibras en la energía más alta y es en esta vibración donde suceden los milagros. Permanece atento a nuestras señales y disfruta el resultado. Llámanos, invócanos, platica con nosotros, no cierres la comunicación, sólo podemos ayudarte cuando lo pides. "
  },
  {
    "phrase": "Tú paz interior te permite una conexión clara e instantánea con tus ángeles, cierra los ojos, respira profundo y llámanos, este acto trae inmediato bienestar para ti, si estás enfermo, sientes miedo o si quieres sentirte amado."
  },
  {
    "phrase": "Cada situación aparentemente dolorosa trae un regalo, pide a nuestro amado Dios Padre-Madre que te permita verlo, extiende tus alas con plena confianza y vuela con seguridad a la siguiente experiencia. "
  },
  {
    "phrase": "Con la misma fuerza con que Dios sostiene los planetas en el universo, así te sostiene a ti. Ten la certeza que estás unido a él y nosotros compartimos ese lazo contigo."
  },
  {
    "phrase": "Cuando mantienes pensamientos de amor y éxito, ten la certeza de que sólo estás atrayendo amor y éxito a tu vida, eres fuerte y poderoso en todos los sentidos, eres el amado hijo de dios."
  },
  {
    "phrase": "Ninguna opinión sobre ti, a menos que manifieste amor incondicional es real. Tu verdad es divina. Eres amado, guiado y protegido por nosotros tus ángeles ahora y siempre."
  },
  {
    "phrase": "Si estás preocupado por cosas materiales como el dinero, el trabajo, la casa o las posesiones, recuerda que hay otro camino. La energía que gasta en angustiarte puedes invertirla en platicar con dios, conocer tu talento, belleza y sabiduría y conocerlos."
  },
  {
    "phrase": "La honestidad contigo mismo, es la magia que te lleva al amor por ti. Los errores cometidos son pasos hacia tu éxito. Quizá algunas de tus emociones pueden preocuparte, asustarte o intimidarte, todo está bien, sé honesto contigo y aprende a amarte como te ama Dios."
  },
  {
    "phrase": "Cambia la culpa por responsabilidad, de esta manera la ira o vergüenza se transforman y aprendes a vivir sin drama. Ábrete a la guía divina."
  },
  {
    "phrase": "Tu poder es ilimitado, enfrenta cada situación y enfócate en el resultado como si ya se hubiera manifestado, alínea mente, corazón y voluntad y conquista tus sueños."
  },
  {
    "phrase": "Habla con tus ángeles y toma cada decisión basado en la luz, ábrete al abrazo amoroso de su consuelo. Disfruta tu día pensando que es un regalo del cielo y está lleno de oportunidades y amor para ti. En el mundo del espíritu no hay problemas reales, todo está en paz, en armonía y sanado. Abre tu corazón y siente como te abraza la luz divina llenando tu vida de bendiciones. "
  },
  {
    "phrase": "Elige palabras de amor para ti y para los demás cuando hables. Como respuesta las situaciones cambiarán a favor, si necesitas ayuda del cielo, enciende una vela blanca para comunicarte con Dios y sus ángeles."
  },
  {
    "phrase": "Tus ángeles podemos guiarte para que conscientemente crees experiencias que te produzcan alegría y bendiciones. Te esperan noticias maravillosas y hay junto a ti muchos ángeles esperando compartir tu felicidad."
  },
  {
    "phrase": "Siempre estamos a tu lado, el cielo está en tu interior, siente nuestra presencia, te inspiramos durante el día dejando señales nuestras en tu camino. Sonríe, estoy a tu lado."
  },
  {
    "phrase": "Las emociones negativas drenan tu tiempo y energía, date un positivazo y confía en la guía del cielo, estoy a tu lado para recordarte que en el amor está la respuesta a todo, el amor no es un sentimiento romántico es aprender a vivir desde tu parte divina."
  },
  {
    "phrase": "Es importante liberar tus miedos y bloqueos para que puedas entender las señales que te enviamos tus ángeles, sin embargo cuida tus palabras, utilízalas para bendecir, tus palabras tienen un poder inmenso."
  },
  {
    "phrase": "Eres tan amado como todas las creaciones de Dios. Ábrete a recibir las bendiciones que te llegan cuando ayudas a otros, cada uno de los arcángeles te bendice con su don especial: valor, sabiduría, amor, pureza, salud, abundancia y alegría."
  },
  {
    "phrase": "Date permiso de soñar, actúa para lograr tus deseos, alinea mente, corazón y voluntad, tu determinación pone el universo a tu favor, los ángeles estamos trabajando en el cumplimiento de tus deseos."
  },
  {
    "phrase": "La respiración es un puente que une al mundo físico con el mundo espiritual, presta atención a tu respiración, cierra los ojos y aspira la luz que te envuelve tu mundo de paz y amor. Todo está bien."
  },
  {
    "phrase": "Toma las riendas de tu mundo e imagina la vida que deseas, sueña en grande. Eres un ser ilimitado. Conviértete en apoyo para otros y recibe el apoyo del universo."
  },
  {
    "phrase": "Para generar un flujo de abundancia en tu vida, es tan importante dar como recibir. Por que recibir más…da más. ¿Qué puedes dar? –palabras dulces, actos de caridad, tu tiempo, disfruta la compañía de los demás."
  },
  {
    "phrase": "El arcángel Miguel te da fuerza y coraje para avanzar en conseguir tus deseos más profundos, el arcángel Gabriel te ayuda a comunicarlos."
  },
  {
    "phrase": "El amor es la fuerza más poderosa del universo, al amar manifiestas tu divinidad, te sientes seguro y protegido, de esta manera es más fácil lograr tu misión de vida y hacer de tu mundo un mejor lugar."
  },
  {
    "phrase": "Para sanar cualquier padecimiento físico, mental, emocional o económico solicita la energía sanadora del Arcángel Rafael y su hueste de ángeles sanadores, percibe la suave de brisa que producen sus alas volando alrededor tuyo y respira este nuevo aire de amor incondicional."
  },
  {
    "phrase": "Cuando agradeces, el universo se asegura de proveerte de más motivos que inspiren tu agradecimiento. Agradece el amor que llega a tu corazón desde la mente divina del gran creador y vive en paz y armonía. Hay mucha gente que te ama."
  },
  {
    "phrase": "Para transmutar la tristeza en alegría, pide asistencia al arcángel Zadquiel, respira profundo, trabaja en recuperar tu fe y sentir el amor que te rodea. Sana tu corazón con oración, meditación y servicio."
  },
  {
    "phrase": "Confía en tu fuerza interior, tú eres el hijo amado de Dios, reconoce el valor de tu verdadera esencia, comparte la fortaleza, bondad y compasión que hay en tu corazón, tus virtudes celestiales, se transforman en felicidad."
  },
  {
    "phrase": "Date permiso de seguir tu intuición, mantén en equilibrio tu energía femenina y masculina y cumple tus sueños. Sé cómo los ángeles, actúa bajo la voluntad de Dios, escuchando tu intuición y vive en armonía."
  },
  {
    "phrase": "Cada vez que respiras inhalas del aire el amor que le han impregnado los ángeles. ¡Siéntelo! Cuando expresas este sentimiento haces vibrar de felicidad a todo tu alrededor."
  },
  {
    "phrase": "Una sencilla forma de percibir las señales divinas es tu contacto con la naturaleza y los ángeles trabajamos dejando señales para tu durante todo el día, ten la certeza del amor de Dios, con él, Todo Está Bien."
  },
  {
    "phrase": "No luches, fluye. En la simplicidad encontrarás una vida llena de luz y armonía, percibe al mundo sutil que te rodea, utiliza el amor como ingrediente secreto para hacer magia en tu vida."
  },
  {
    "phrase": "Haz cambios a tu vida, para obtener resultados diferentes es importante dejar el conformismo. Combina dignidad con piedad, puedes equivocarte pero jamás rendirte. Estamos a tu lado."
  },
  {
    "phrase": "Entrega tus angustias y preocupaciones al cielo y te daremos claridad y creatividad para resolver con bien cada situación, acepta la experiencia, confía y prepárate a recibir el milagro escondido en cada prueba. Todo es para bien, aunque no lo entiendas."
  },
  {
    "phrase": "Mientras más reconoces que eres un ganador en el juego de la vida, es más fácil recibir tus recompensas. Empieza por reconocer que eres hijo del amor, en ti están integrados los talentos que te hacen único y exitoso, no lo dudes ni un instante."
  },
  {
    "phrase": "Integra la oración y la meditación como parte de tus hábitos diarios, alimenta tu alma y disfruta de paz y armonía. Puedes convertir cada una de tus actividades en una oración que te comunique con nuestro Padre-Madre cuando la haces con amor y agradeces."
  },
  {
    "phrase": "Ríndete a la luz y ábrete a recibir la asistencia angelical. Crea el cielo en la tierra. No te esfuerces buscando fórmulas complicadas, sólo cree y confía, los ángeles te dirigimos a las oportunidades que hay para ti. Sacude la rutina y concibe nuevas ideas."
  },
  {
    "phrase": "Practica el perdón contigo mismo amado mío y elimina de tus pensamientos el juicio hacia ti, has sido un juez muy severo contigo mismo,  piensa que todo lo que has hecho ha sido con la certeza de que era lo mejor para los involucrados en ese momento. Dios te ama"
  },
  {
    "phrase": "Sacude la rutina y concibe nuevas ideas. Tú eres co-creador con el universo, tu plan divino de vida es perfecto, los maestros, las situaciones, son tu fuente de luz, agradécelos están provocando que salga lo mejor de ti."
  },
  {
    "phrase": "Practica el perdón contigo mismo amado mío y elimina de tus pensamientos el juicio hacia ti, has sido un juez muy severo contigo mismo, piensa que todo lo que has hecho ha sido con la certeza de que era lo mejor para los involucrados en ese momento. Dios te ama. "
  },
  {
    "phrase": "Recibe este nuevo mes con alegría, tiene mucha energía nueva para ti, la tierra te enseña que cuando hay una buena siembra la cosecha es abundante, siempre buenas acciones, haz que tus palabras sólo sean de bendición."
  },
  {
    "phrase": "Ama, cuida y procura a tu niño interior, ese ser que se maravilla de lo simple y vive en el presente. Tu ser adulto es el resultado de las heridas de tu infancia, acepta que las tienes y trabaja en sanarlas para encontrar cuan valioso eres siendo tú mismo."
  },
  {
    "phrase": "Cada pensamiento, cada actitud, cada palabra que procede del amor te hace creador de milagros. Imagina el mejor obsequio que te vaya a dar la vida y con esa sensación alinea tus pensamientos y acciones, ahora goza de tu gran obra. Date cuenta tu vida es maravillosa."
  },
  {
    "phrase": "Cuando mueves tu cuerpo, cantas y bailas, la energía de tu cuerpo se modifica y sube tu vibración para bien. ¡Muévete! Los grandes alquimistas siempre han utilizado la energía de sus movimientos y cantos para hacer magia. ¡Atrévete!"
  },
  {
    "phrase": "A los ángeles nos encanta el orden, porque el orden permite que la energía fluya, de acuerdo a las leyes del universo si pones orden en lo exterior, esto mismo pasará en tu interior provocando que tus emociones se equilibren y tu cuerpo físico goce de salud y energía."
  },
  {
    "phrase": "Date permiso de ver la situación desde otra perspectiva, aprovecha la oportunidad y aprende. Te invitamos a dejar el lugar de víctima y responsabilizarte de tu propia vida, esto te ayudará a eliminar la culpa y ver cómo puedes corregir los errores cometidos con la fuerza del amor. "
  },
  {
    "phrase": "Deja de luchar por realizar tus deseos, relájate y permite que el universo trabaje, ábrete a recibir, ten fe y confía. Primero es importante saber que deseas, asumir el compromiso de responsabilizarte de tu deseo cumplido y enfocar mente, corazón, voluntad y palabras en tu deseo."
  },
  {
    "phrase": "Las únicas limitaciones que tienes en tu vida, son tus memorias, creencias y pensamientos. Vamos a eliminarlas juntos. Es importante que manifiestas al universo tu deseo de cambiar, de sanar las consecuencias que han provocado estas memorias y pedir que el poder del amor haga su trabajo. Dios está obrando a través de ti, sólo fluye."
  },
  {
    "phrase": "Tu mayor valor radica en ser tú mismo, tu talento individual es el que necesita el mundo para ser mejor. ¡Sé tú mismo! Date permiso de expresar tu verdad amorosamente, y mantente fiel a tus ideales. Esta historia es tu historia y aquí mismo la estás escribiendo. Te quiero. "
  },
  {
    "phrase": "No te resistas al cambio, las nuevas experiencias hacen crecer a tu alma. Sé flexible y atrévete. Grandes maestros han pronunciado que no puedes tener resultados diferentes con las mismas acciones. Si quieres ayuda, sólo llámanos, queremos ayudarte."
  },
  {
    "phrase": "Cuando das, realmente te estás dando a ti mismo, porque el receptor y tú son uno solo, ¿Y tú que das? Tu ser es ilimitado, permite que Dios actúe a través de ti y serás testigo de los milagros que se obran todos los días, gozarás de mayor tiempo, salud, creatividad… Lo que provocará muchas ocasiones para dar y compartir."
  },
  {
    "phrase": "Cuida tu cuerpo con amor y tu cuerpo te responderá con increíble salud y energía. Escucha las señales de tu cuerpo, este es el vehículo sagrado que escogiste para tu aventura en la tierra. Celebra la vida, nutriendo, lavando y acariciando tu cuerpo."
  },
  {
    "phrase": "Conversa con las áreas de tu cuerpo que están reclamando tu atención, agradece su ayuda y toma acción a tu favor. Recuerda que la enfermedad es un desorden manifestado por la alteración en tus emociones. El orden divino de cada una de tus células es un derecho divino, en el momento en que empieces a alinear tus emociones y merecimientos se manifestará."
  },
  {
    "phrase": "Cuidar de ti, es una forma de amar a tu familia, a tus amigos y a tu planeta. Si estás bien, todo está bien. Todos estamos unidos bajo una red hecha de polvo de estrellas, esto confirma que estamos unidos para sanar. Tu vida repercute en toda la creación, eres muy valioso cuida de ti. "
  },
  {
    "phrase": "La gratitud trae cosas buenas para ti, la queja y la resistencia las aleja. Cancela todo pensamiento de queja, abre las puertas de tu abundancia a todo nivel, agradeciendo, bendiciendo, compartiendo y amando con pasión tu labor."
  },
  {
    "phrase": "Agradece al padre, a la madre, a tus ángeles y arcángeles, todos están obrando a tu favor. El universo te da todo lo que necesitas, abre tus brazos al cielo, siéntete merecedor del apoyo divino y confía. Estamos a tu lado."
  },
  {
    "phrase": "Tus sentimientos son energía pura que busca salir y expanderse, los sentimientos reprimidos te agotan, libéralos. Los pensamientos positivos generan luz que se expande e ilumina no sólo tu camino, sino el de los demás. Te he dejado señales con el propósito de que te sientas seguro, cada pista es un regalo amoroso de Dios."
  },
  {
    "phrase": "Saca la fuerza que hay dentro de tu corazón. Usa tu creatividad, canta, baila, escribe, cocina, teje, toma fotos. ¡Disfruta! Celebrar la vida, aunado a la manera en que alineas mente, corazón y voluntad te ayudará a vivir tu plan divino en amor."
  },
  {
    "phrase": "Los ángeles te ayudamos a cumplir tus sueños, pero necesitamos de tu colaboración, comienza pidiendo nuestra ayuda, después haz tu petición enfocándote en lo que sí quieres, elabora tu pedido en primera persona, en presente y en infinitivo."
  },
  {
    "phrase": "Date tiempo para ti, disfruta el momento, relájate y percibe nuestro aroma sutil, estoy muy cerca. ¿Me hueles? He venido a ayudarte a sembrar ¿qué quieres ser, qué deseas tener, que deseas disfrutar? Con tu amor florecerá."
  },
  {
    "phrase": "Los miedos se basan en la creencia de que estás sólo y abandonado y eso es totalmente falso. Tus ángeles estamos junto a ti, de igual manera que Dios Padre-Madre, nunca hubo separación, eres uno con la divinidad y su creación."
  },
  {
    "phrase": "Cuando encuentras plumas sin razón en tu camino, puedes estar seguro de que la dejamos para que tengas la certeza de que tu vida económica va a mejorar y formamos figuras en las nubes para ayudarte a crear nuevos proyectos."
  },
  {
    "phrase": "De cada circunstancia aprendes algo: paciencia, compasión, fuerza… ¿Qué aprendiste de esta situación? No te quejas, sólo el amor es real, es importante que tomes un tiempo de duelo para lo que se ha ido."
  },
  {
    "phrase": "Es muy válido que sientas lo que tú quieras, lo que no se vale es afectar negativamente a los demás con tus sentimientos."
  },
  {
    "phrase": "Recupera el control de tus actividades, tu tiempo, tu vida. Los ángeles respaldamos tu decisión, pero la decisión es tuya. Cuando tomes una decisión permite que te guíe tu corazón."
  },
  {
    "phrase": "Mostrar gratitud a los demás es un acto divino, sólo has énfasis en mostrar gratitud contigo mismo. La palabra gracias es una oración completa de muy alta vibración."
  },
  {
    "phrase": "Las promesas más importantes son las que te haces a ti mismo, manténlas presentes… Tu recompensa viene del cielo. Al responsabilizarte de tu vida, asumes tu poder."
  },
  {
    "phrase": "Es importante que tu poder sea utilizado para bien, con infinito respeto y prudencia, de esta manera la totalidad de la creación obrará a tu favor. "
  },
  {
    "phrase": "No des nada por hecho, no supongas, al hacerlo desaparecen en tu vida la dicha y sorpresa de los inesperado. La voluntad de Dios es maravillarte con una vida rica en magia."
  },
  {
    "phrase": "Date la oportunidad de nutrir tu vida renovando hábitos. Bendice lo que comes y lo que bebes. Bendice tu amanecer en tu camino. Que tu día sea una continua bendición."
  },
  {
    "phrase": "Los ángeles te ayudamos a perdonar y liberar el daño que ha dejado en ti el resentimiento. Desintoxícate. Los ángeles también podemos ayudarte a depurar tus pensamientos, emociones y la manera en que se han sintomatizado en tu cuerpo."
  },
  {
    "phrase": "Cuando envías amor a las personas que te han provocado resentimientos, rompes los patrones y generas bienestar en ambos. Recuerda sólo el amor es real, es sin duda la fuerza más grande del universo."
  },
  {
    "phrase": "Hemos trabajado mucho en el perdón, es tiempo de actuar. Hoy perdona una falta menor a alguien y libérate. Después perdona una falta tuya, se gentil contigo. Las decisiones tomadas fueron correctas para ti en su momento."
  },
  {
    "phrase": "Recuerda que el tiempo de Dios es perfecto, tu ansiedad alenta el proceso de manifestación de la respuesta a tus oraciones. Elimina todo bloqueo con fe, esperanza y amor."
  },
  {
    "phrase": "La paciencia es un don de Dioses, disfruta la forma creativa en el que el universo escoge las lecciones que te activan la paciencia y confía. Disfrutarás el milagro de ver en tu vida lo que realmente importa."
  },
  {
    "phrase": "Eres completamente digno y merecedor de ser amado. Empieza por ti, ámate a ti mismo, como te ama Dios Padre-Madre, tu esencia es divina, tus talentos maravillosos, sólo se tú mismo, acepta tu verdad y disfruta."
  },
  {
    "phrase": "Los ángeles te guiamos a superar la inseguridad si nos lo pides. Una autoestima alta te favorece. Nútrete con la energía de la tierra, respira la bondad del cielo y pide al arcángel Miguel que inyecte fuerza a tu corazón."
  },
  {
    "phrase": "Responsabilízate de tu vida. Define por escrito que es lo que quieres cambiar y lo pasos a seguir para lograrlo. Enfócate en tu meta, alinea mente, corazón y voluntad."
  },
  {
    "phrase": "Que tu fuego interno te nutra, no permitas que te queme a través de la ira. Respira profundamente, las respuestas impulsivas te pueden hacer perder la conexión divina que proviene de la paz interior."
  },
  {
    "phrase": "Recuerda que Dios es parte de ti, tanto como es parte de la más lejana estrella, pensamientos y palabras, influyendo positivamente en ti y tu mundo."
  },
  {
    "phrase": "Tu alma brilla con intensidad cuando te dices a ti mismo afirmaciones amorosas, es un proceso sanador. La luz que procede de tu interior ilumina tu camino y tu entorno. Abraza tu luz."
  },
  {
    "phrase": "Visualiza ángeles alrededor de ti sanándote y levantando tu ánimo, cuando nos invocas nos manifestamos de la forma más fácil para que nos percibas, sigue las señales y avanza seguro en tu plan divino de vida."
  },
  {
    "phrase": "Olvida la necesidad de agradar a todo el mundo, lo importante es que tú te valores. El compromiso es contigo mismo, tú eres un ser único e irrepetible, haz con tu autenticidad de este mundo un mejor lugar."
  },
  {
    "phrase": "Tu cuerpo reacciona positivamente al amor. Di a tu cuerpo –‘’Gracias por ser tan sano, fuerte, eficiente’’ y apapáchate. Tu salud física es reflejo de tu salud emocional, si hay alguna señal de falta de salud, pide ayuda al arcángel Rafael."
  },
  {
    "phrase": "Recuerda que lo que tú das, es lo que recibes. Hoy es un buen día para regalar sonrisas y bendiciones. Sal a la calle con esta idea en mente, regala sonrisas, contagia felicidad, hay un milagro esperándote."
  },
  {
    "phrase": "La risa es sanadora, sea una risita silenciosa o una carcajada estruendosa, su vibración es muy alta, tu mente no sabe cuánto tu sonrisa es real o ficticia, simplemente empieza a generar neurotransmisores de felicidad."
  },
  {
    "phrase": "¿Sabes por qué los ángeles siempre reímos? –Por la gracia de Dios. ¡Ríe! Es un chiste. El sentido del humor es un don que tienes para re-encontrar tu inocencia y vivir el presente."
  },
  {
    "phrase": "El humor está impregnado de la estructura amorosa del universo y llena de gozo tu corazón. Late al ritmo del universo y contagia felicidad."
  },
  {
    "phrase": "La felicidad es tu derecho de conciencia, es una elección que viene desde tu interior sin importar lo que sucede en el exterior. Tu mundo es tu creación, corrige lo que no te guste alineando mente, corazón y voluntad."
  },
  {
    "phrase": "Confía en que los ángeles estamos contigo en todo momento, cuidándote. Cierra los ojos y siente mi cálido abrazo. Te amo. "
  },
  {
    "phrase": "Para sanar toda ilusión, es importante dejarla ir y aceptar que la luz y el amor divino entre en tu corazón. Todo es para bien, cierra ciclos y atrévete a volar."
  },
  {
    "phrase": "La enfermedad, la carencia, la soledad, el dolor no existen en la conciencia del amor. Recuerda que tu esencia es divina, reconoce en qué estás enfocando tus pensamientos y concéntrate sólo en pensamientos positivos."
  },
  {
    "phrase": "Puedes pedir todo lo que deseas en beneficio tuyo y de los demás, nunca es demasiado. El universo es ilimitado."
  },
  {
    "phrase": "Recuerda cambiar la culpa por responsabilidad, no sientas culpa por ser rico y poderoso, son dones divinos para ayudar, tus dones vienen de la providencia divina, no le quitas nada a nadie, hay para todos."
  },
  {
    "phrase": "El juego de víctima o el sufrimiento te ayudan siempre que los veas como juego, experimentes y aprendas, después suéltalos, no es real. Sólo el amor es real."
  },
  {
    "phrase": "Perdonarte es diferente a aceptar la culpa. Es reconocer tus emociones y transmutarlas por amor, asumir que eres amor y provienes del amor, eleva tu autoestima."
  },
  {
    "phrase": "El padre siempre te ha visto como lo que realmente eres, una creación perfecta hecha a su imagen y semejanza. Dios ama la diversidad, por lo que no es importante que te compares o parezcas a alguien."
  },
  {
    "phrase": "Estamos aquí para atraparte cuando caigas. Llámanos, mantendremos tu fe a flote. Visualiza que cada caída es un paso hacia el éxito."
  },
  {
    "phrase": "Respetemos tu libre albedrío, si quieres sufrir con percepciones miserables de ti mismo, no podemos hacer nada, te acompañamos en tu elección, si quieres avanzar en amor, también te guiamos."
  },
  {
    "phrase": "Tienes acceso a la fuente de sabiduría más asombrosa que te da consejo, guía y dirección. Escucha tu corazón. Cuando quieras ayuda específica en algún tema, solicita ayuda al ángel especialista en algún tema, no importa que no conozcas su nombre, por ejemplo pide ayuda al ángel de las matemáticas."
  },
  {
    "phrase": "Hoy como niño, mira tu vida con otros ojos, eres un héroe dispuesto a lograr la hazaña de ser tu mismo. ¡Vamos a jugar! Te amo."
  },
  {
    "phrase": "Busca primero el reino de Dios (tu armonía interior) y todo lo demás se te dará por añadidura. Tu relación con mamá te va a dar seguridad."
  },
  {
    "phrase": "Para que se genere el ciclo sin fin, es tan importante el dar como el recibir. Mereces plenitud ¿Te sientes merecedor de lo mejor?"
  },
  {
    "phrase": "Los ángeles te aplaudimos, vas por el camino correcto. Tu avance en el camino de la conciencia lo manifiesta. Como es afuera es adentro, la armonía se manifiesta en tu vida."
  },
  {
    "phrase": "En la naturaleza nuestro padre-madre ha dejado señales para ti, los árboles te inspiran apoyo, cobijo y sustentos: las flores, paz, amor y contento. "
  },
  {
    "phrase": "Los ángeles caminamos a tu lado en el sendero que elegiste, todas las puertas de oportunidad se están abriendo, una estrella brillante te guía, las recompensas aguardan luminosas."
  },
  {
    "phrase": "Los ángeles te ayudamos a sanar tus relaciones, nos encanta presentarte nuevos amigos. Sonríe estamos llenando tu vida de luz y amor, cada día es un motivo de felicidad total. "
  },
  {
    "phrase": "La vibración que genera la tranquilidad y la satisfacción de estar haciendo lo correcto genera milagros. ¡Vibra en alto! Absorbe el polvo de oro que derramo sobre ti."
  },
  {
    "phrase": "Confía en tu intuición, cuando nos solicitas ayuda, susurramos sugerencias y respuestas que aparecen como ideas para ti. Siempre gozas de la protección angelical y de todo mi amor."
  },
  {
    "phrase": "Hoy celebra ¿qué? Pues que estas vivo y estamos junto a ti para ayudarte a lograr tu plan divino. Todas las respuestas están en tu corazón."
  },
  {
    "phrase": "¿Cómo mides tu progreso, por tu talla, tus ingresos, tus parejas, tus hijos? La medida universal es tu capacidad de amar. Esta divina esencia es un regalo para ti. "
  },
  {
    "phrase": "Sana tu relación con tu energía femenina a través del cobijo de la Madre Divina, ella sí te nutre, te apoya, te da permiso de recibir y merecer."
  },
  {
    "phrase": "-‘’Dulce Madre no te partes, tu vista de mí no alejes, ven conmigo a todas partes y solo nunca me dejes’’."
  },
  {
    "phrase": "    Cuando quieras ver la luz sagrada que hay en tu interior, enciende una vela y visualiza en su llama tu fuego interior, es el fuego que nutre tus sueños, calienta tu corazón e ilumina tu vida."
  },
  {
    "phrase": "Es importante que tengas un lugar sagrado donde te conectes con los ángeles y pongas un altar, será más fácil conectarte. Este espacio será un indicador a tu mente de la disposición de tu corazón a conectarte con tu divinidad."
  },
  {
    "phrase": "Cuando te sientas nervioso, es un síntoma de que el miedo se está apoderando de tus emociones. Relájate y llámanos. Te llenaremos de confianza para que la divinidad en tu interior actúe inmediatamente, haciéndote sentir seguro."
  },
  {
    "phrase": "Relájate, respira profundo y permite que Dios y los ángeles te protejamos. Si Dios está contigo ¿quién contra ti? Tu alma es el templo de Dios."
  },
  {
    "phrase": "Tú eres el creador de tu vida, cuando permaneces optimista en el proceso, tu fe logrará la magia. Haz el propósito de transmitir tu luz a tus acciones, palabras, pensamientos y emociones"
  },
  {
    "phrase": "Al solicitar nuestra ayuda, es muy importante que tengas claridad de los que deseas. Permanecer enfocado es la clave, así como responsabilizarte del logro de tu deseo."
  },
  {
    "phrase": "El poder está en tu interior, cree y confía. Los ángeles estamos a tu lado apoyándote, no hay nada que temer, todo está bien."
  },
  {
    "phrase": "En el universo están todas las respuestas, solicita soluciones sin importar el tamaño del problema. Dios todo lo puede, tú todo lo puedes, asume tu divinidad."
  },
  {
    "phrase": "Amado mío, tú tienes mucho que ofrecer al mundo, eres mucho más poderoso de lo que puedes llegar a entender. Manifiesta la seguridad de tener junto a ti el apoyo del mundo angelical."
  },
  {
    "phrase": "Tu talento es el impulso para logar tu propósito divino, por eso es importante realizar lo que te gusta, aunque tengas otra labor, una vez que conjuntas tu labor con tu pasión, logras tu misión. "
  },
  {
    "phrase": "Cada momento en tu vida es una oportunidad para servir y para gozar. Aprovecha cada instante. Convierte tu vida en un jardín perfumado. Usa como abono el amor para cosechar bendiciones. "
  },
  {
    "phrase": "Provienes de una mente abundante y eso te hace generador de abundancia y bienestar para ti y los demás. Los ángeles somos portadores de dones para ti, recíbelos con gratitud y comparte generosamente tus bendiciones."
  },
  {
    "phrase": "El cambio que se aproxima supondrá energía de renovación, no temas, todo está bien, los ángeles estamos cerca y te acompañamos en todo momento."
  },
  {
    "phrase": "Tus intenciones crean tus experiencias, mantén intenciones para ver, sentir y vivir experiencias de alto bienestar. La gracia crece, se expande, llena tu corazón, tu espacio, tu mundo y trasciende."
  },
  {
    "phrase": "Tus intenciones crean tus experiencias, mantén intenciones para ver, sentir y vivir experiencias de alto bienestar. La gracia crece, se expande, llena tu corazón, tu espacio, tu mundo y trasciende."
  },
  {
    "phrase": "Ábrete a recibir el bienestar que tiene para ti cada día. La luz del padre sol se proyecta sobre la madre tierra uniendo amorosamente los reinos de la creación. "
  },
  {
    "phrase": "La gracia divina  se manifiesta en tu vida cuando en la cosa más simple encuentras una bendición, en toda la creación se manifiesta la amorosa presencia de Dios "
  },
  {
    "phrase": "Cuando depositas tu fe en Dios, el universo actúa para que tus deseos se vuelvan realidad. El amor es la esencia de todo lo que existe."
  },
  {
    "phrase": "Para llamarnos no necesitas un ritual especial. Los rituales son para que tu mente entienda que estás dispuesto a hacer las cosas de una manera diferente y te has enfocado en lograr un objetivo, por supuesto cuentas con nuestro apoyo. Sólo llámanos, estamos junto a ti. "
  },
  {
    "phrase": "Recuerda que tú eres el director de tu propia película y el héroe que al final se encuentra a sí mismo. El premio para esta producción se llama libertad y la retribución es amor. "
  },
  {
    "phrase": "Los pensamientos positivos generan resultados positivos y los pensamientos negativos bloquean tu avance. Adáptate a toda circunstancia, no te resistas, fluye. "
  },
  {
    "phrase": "Puedes pedir ayuda divina sobre el tema que se te ocurra, la sabiduría del cielo, está a tu disposición. Toda solución proviene de la mente maestra que todo lo crea, cree y confía."
  },
  {
    "phrase": "La esencia que te anima es Dios, permite que se manifieste en tu vida y llena tu casa con amor, paz, tranquilidad, salud, abundancia y mucha protección."
  },
  {
    "phrase": "Lo mejor de cada situación es que puedes gozar el aprendizaje, los errores te acercan al éxito que mereces. Toda situación puede ser lección o bendición, al transcurrir del tiempo te darás cuenta que ambas son bendición."
  },
  {
    "phrase": "Tu corazón y mente están naturalmente llenos de gozo, tú eres un reflejo de la felicidad de Dios, hoy hemos preparado para ti un día lleno de magia con muchos encuentros bellos y situaciones que te harán feliz."
  },
  {
    "phrase": "La alegría te da fuerza y te da acceso a la sabiduría y creatividad del universo. Con alegría y amor, crecen las flores, también se nutren tus emociones: amor, bondad, paciencia, tolerancia, virtudes que te ayudan a ser feliz."
  },
  {
    "phrase": "Con nuestra ayuda puedes encontrar el bien en toda situación, mantén abierto tu corazón. No te angusties, tranquilízate, el cielo ya tiene la respuesta a tu pedido, ten fe, cree y confía."
  },
  {
    "phrase": "Recuerda que tú estás bendecido con paz y prosperidad, no estás solo, los ángeles siempre te acompañamos, mantente atento el día de hoy hemos dejado una señal especial para ti."
  },
  {
    "phrase": "Sin importar el momento, la oración te acerca a la luz divina y te mantiene en el camino correcto. Invoca nuestra ayuda y protección."
  },
  {
    "phrase": "Reconoce tu verdad para sanar, escucha tu cuerpo, percibe tus emociones y busca la armonía. La apariencia de enfermedad proviene de un desorden en tu interior, solicita que el orden divino se manifieste y sana."
  },
  {
    "phrase": "Hoy tengo para ti comprensión, consuelo y un cúmulo de cosas bellas. Son regalos que nuestro padre-madre te envía a través de nosotros."
  },
  {
    "phrase": "Al convertir una de tus acciones en una abalanza a tu divinidad, haces un depósito a tu bando de plenitud. Hay bendiciones especiales reservadas para ti cuando actúas con amor y perdón."
  },
  {
    "phrase": "Mantén tu mantente con pensamientos de agradecimiento y paz, elimina la preocupación, tus ángeles te acompañamos tanto de noche, como de día."
  },
  {
    "phrase": "Los ángeles vemos que estás preocupado por avanzar en la vida, elimina este sentimiento y deja los detalles a Dios. Lo mejor que puedes hacer es expresar amor en todo lo que haces, fluye naturalmente en el camino de la luz."
  },
  {
    "phrase": " Tu intuición o sexto sentido es totalmente exacta todo el tiempo, ya que es una extensión de la perfección divina. Toma toda decisión desde la intuición pues es tu corazón donde la guía divina prevalece."
  },
  {
    "phrase": "Vive, sueña y ten la certeza de que estás en el camino correcto para regresar a tu hogar, el paraíso. Dios te ama eternamente, es por eso que nos ha enviado a los ángeles para que velemos por ti."
  },
  {
    "phrase": "Nosotros jamás nos cansamos, siempre estamos disponibles para ayudarte en cuanto solicites nuestra guía. Cuando usas el amor creas, cuando te inclinas hacia el egoísmo destruyes. Todos somos uno."
  },
  {
    "phrase": "Admira la belleza en cada persona con que te cruces, todos son maestros y te rocían con el perfume del cielo. En especial tu padre en la tierra, honra su presencia en tu vida, cuando lo haces se presentan en tu vida la justicia y la abundancia."
  },
  {
    "phrase": "Utiliza los dones y talentos con que has sido bendecido para bañar el mundo con tu luz divina. Sonríe, sonríe… Sonríe siempre, con alegría, transmite amor a los demás."
  },
  {
    "phrase": "Elige la paz e incrementa tu capacidad para eliminar el estrés, las dudas, la carencia y el dolor. El arcángel Rafael, toma tu mano como a Tobías y te ayuda a cruzar a salvo, los desiertos que se te presenten."
  },
  {
    "phrase": "Cuando practicas fe, esperanza y caridad, tu vida se llena de amor, salud y prosperidad. Nuestro padre-madre tiene muchos regalos para ti, haz un pedido especial, cree y confía."
  },
  {
    "phrase": "En el universo todo es vibración, la paz, la felicidad, la salud… también la música, hoy presta atención especial a la música, tenemos un mensaje para ti que te ayudará a armonizar tu vida."
  },
  {
    "phrase": "No me sueltes de la mano, vamos a comenzar el día con una sonrisa, todo se empieza a solucionar. Los ángeles estamos contigo. Nunca estás solo."
  },
  {
    "phrase": "Es importante que tus palabras lleguen al corazón de los hombres, para inspirarles y conducirlos en la bondad. Las palabras son tu varita mágica, tiene poder, úsalas para bien."
  },
  {
    "phrase": "Tu situación financiera, como tras áreas de tu vida, se ve afectada por las emociones en tu interior. Siéntete rico. Convierte tu vida en una fuente sagrada de bienestar, ayuda a eliminar la sed de esperanza que consume al mundo."
  },
  {
    "phrase": "Las ideas de miedo con respecto al dinero provocan tensión en tu interior y minan tu capacidad de manifestar riqueza. Eleva tus aspiraciones al cielo, sin descuidar tu desarrollo en el mundo material. Tú eres fuerte de abundancia, vive tu riqueza sin culpa."
  },
  {
    "phrase": "Date tiempo para terminar una tarea pendiente y date una recompensa. ¡Eres capaz de lograr lo que te propongas! Organiza tu vida, el orden provoca armonía, bienestar y creatividad."
  },
  {
    "phrase": "Trátate a ti mismo con compasión, no te juzgues. El juicio divide, el amor une. Queremos ayudarte a sentirte amado, aspira el aroma a rosas con que perfumamos tu vida el día de hoy, eres amado, muy amado, abre tu corazón."
  },
  {
    "phrase": "Cuando te das permiso de recibir, mandas un mensaje al universo y sellas el proceso de manifestación. Te esperan momentos mágicos durante el día ¿estás listo?"
  },
  {
    "phrase": "Los ángeles agradecemos tu servicio y es por eso que en tu tiempo de descanso te otorgamos un sueño reparador. Te amamos profundamente."
  },
  {
    "phrase": "Sincronízate con el ritmo del universo a través de tu contacto con la naturaleza e incrementa tus tiempos de oportunidad. Tu casa y tú están protegidos ahora y siempre, los ángeles estamos a tu lado. Que tu actitud sea de certeza. "
  },
  {
    "phrase": "Los ángeles estamos a tu lado para guiarte en el camino de amor de tu plan divino de vida, Sin fe es poco fácil que avances en el camino espiritual."
  },
  {
    "phrase": "Tus chakras son los semáforos que te indican como están tus emoción es. Enfócate en armonizarlos. Elimina de tus pensamientos cualquier persona o situación que te deprima."
  },
  {
    "phrase": "Tú no eres víctima de las circunstancias, tienes el apoyo de todos los ángeles y arcángeles del cielo. Te la puedes pasar muy bien en la vida, cree y confía."
  },
  {
    "phrase": "Tu naturaleza es tan divina como la de toda la creación. No te resistas a tu verdad, la vida es maravillosa cuando estás en armonía. Cada persona que aparece en tu vida, tiene una razón y un propósito. Todos son tus maestros."
  },
  {
    "phrase": "Ríndete a la luz y goza el resultado de tu oración. Ten presente a donde te diriges y mantendrás el camino. No es pérdida de tiempo escuchar tu corazón."
  },
  {
    "phrase": "Estar vivo es una razón para celebrar, honra a tus padres y pídeles permiso de hacer las cosas a tu modo. De ti depende hacer de este día algo maravilloso."
  },
  {
    "phrase": "La gracia divina, el amor y la luz brillan para ti, ábrete a los regalos que hay para ti. Intenta alcanzar una y otra vez lo aparentemente imposible."
  },
  {
    "phrase": "La armonía de tus energías femenina y masculina es importante para lograr tu misión divina. Estás enormemente bendecido, adopta una actitud positiva."
  },
  {
    "phrase": "No entregues tu poder a la opinión de los demás, eres un ser único e irrepetible, permite que brille tu luz. Emprende algo nuevo sin temor, la vida es emocionante, arriésgate."
  },
  {
    "phrase": "La naturaleza te ayuda a liberar tensiones y presiones en tu vida, disfruta de ella. Para crear lo nuevo es importante contar el cordón con lo viejo."
  },
  {
    "phrase": "Los ángeles cuidamos de tu niño interior, haciendo que incrementes tu vitalidad y disfrutes más de la vida. Cuando hay paz en lo profundo de tu pequeño mundo, se refleja en el mundo que te rodea."
  },
  {
    "phrase": "Honra tu evolución y tus logros, los ángeles te ayudamos a ver lo bueno en toda situación. El júbilo acompaña al servicio y el servicio a la dedicación. Da lo mejor de ti."
  },
  {
    "phrase": "Envuelve cada deseo con fe, gratitud y alegría, confía en nosotros que los llevamos directo al cielo. Cuanto más posesivo te encuentres hacia algo, más probabilidades hay de perderlo."
  },
  {
    "phrase": "Cuida tu cuerpo con amor, nutre tus pensamientos, alimenta tus palabras y siente nuestro amor incondicional. El sueño y el descanso renuevan tu cuerpo y espíritu, también cuídalos. "
  },
  {
    "phrase": "El amor por ti te invita a aspirar a lo alto, cuanto más alto mejor. Aún cuando no alcances ese propósito todas las veces, te estarás estirando continuamente maximizando tu capacidad. "
  },
  {
    "phrase": "Los ángeles te amamos como el ser puro y divino que eres. Ámate a ti mismo. Recuerda siempre que tú has de cumplir tu parte."
  },
  {
    "phrase": "Observa las muestras de amor que te regala el universo y aliméntate de su calidez. Yo estoy siempre aquí y nunca te dejaré ni te abandonaré."
  },
  {
    "phrase": "Disfruta la tranquilidad perfecta que hay en tu interior. Disfruta el paraíso que está dentro de ti. Bebe de la infinita fuente de poder hay en este paraíso y te encontrarás haciendo cosas que nunca imaginaste."
  },
  {
    "phrase": "Estás eternamente con Dios, sólo en tu imaginación es posible la separación. Que este amor siga fluyendo y que nada se interponga en su camino."
  },
  {
    "phrase": "Te amamos desde que tu alma fue creada, y esto seguirá así por siempre. Tú no estás solo. Que nada impida tu conciencia de que todos somos uno. "
  },
  {
    "phrase": "Tus expectativas son semillas plantadas a favor tuyo, crecerán y elevarán tu espíritu. Cuando las riegues con amor y comprensión, volverán a ti como flores de color inigualable y frutos deliciosos."
  },
  {
    "phrase": "Si surge un conflicto a tu alrededor, elige la paz. Pide ayuda divina orando o meditando. Sustituye los pensamientos infectados, negativo, críticos por pensamientos del más puro amor. "
  },
  {
    "phrase": "Decide actuar a tu favor y haz algo por tu cuerpo, mejora tu dieta, baila, duerme bien. Tu cuerpo es tu templo. A nadie le gusta ser herido ni ofendido, tampoco a tu cuerpo."
  },
  {
    "phrase": "También tus seres queridos tienen ángeles que los cuidan, deja de preocuparte por ellos y bendícelos. Intenta comprenderlos y estate dispuesta a acompañarlos cuando sea necesario, pero sin dejar de ser tú mismo."
  },
  {
    "phrase": "Enfócate en tu meta, respeta tus decisiones, nosotros te protegemos y confirmamos que estás en el camino correcto. Asegúrate de obrar lo mejor que puedas, que tus motivaciones sean puras."
  },
  {
    "phrase": "Los ángeles queremos asistirte en todas las cosas, grandes o pequeñas, sólo queremos verte feliz. Deja de luchar y abandónate. Todo lo que has de hacer es SER y permitir que los milagros se manifiesten."
  },
  {
    "phrase": "Confía en que todo lo que quieres ya existe y se te entregará en el momento correcto. Cuando lo recibas, es importante dar, compartir y generar el flujo de la abundancia infinita."
  },
  {
    "phrase": "Lo que está bien para ti, puede que no lo sea para alguien más, busca tu guía interior y actúa siendo tú mismo, sin intentar convertirte en alguien más."
  },
  {
    "phrase": "Con gran amor y compasión te pedimos que nos permitas asistirte con más frecuencia. Mereces la ayuda dl cielo, considera cada dificultad como un reto que te impulsa hacia adelante."
  },
  {
    "phrase": "Tu vida adquiere cualidades mágicas conforme vives bajo la gracia y la fe, todo lo puedes manifestar, algunas veces el cambio es tan gradual que no lo notas, hasta que aparece ante tus ojos el reflejo de una persona plena."
  },
  {
    "phrase": "Reconoce tu libertad para ascender espiritualmente a mayores alturas. No actúes como pájaro enjaulado. Eres libre, acéptalo."
  },
  {
    "phrase": "Suelta el peso de tus cargas, entréganos tus angustias y preocupaciones, las llevaremos al nuestro padre-madre, siente su respuesta, en este instante te fortalece y sostiene."
  },
  {
    "phrase": "Hoy abre los brazos para dar la bienvenida a los regalos que lleguen a ti y di si al flujo universal. Cuanto más abierto estés menos posibilidades hay de frenar los milagros."
  },
  {
    "phrase": "A pesar de la apariencia externa acepta la prosperidad en todas las personas, sólo lo divino es real. Todo comienza en tu interior y se abre paso hacia el  exterior, avanzando firme con tu fe y confianza."
  },
  {
    "phrase": "La salud es el estado natural de todo ser vivo, fuiste creado sano, cuando veas a alguien reconoce su perfección. La luz del día está ahí, pero si no corres las cortinas, te quedarás a oscuras."
  },
  {
    "phrase": "Date permiso de pedir ayuda y proponte recibirla con gratitud y alegría, tú la mereces. Jamás albergues dudas con respecto a ti y tu capacidad de ser una persona íntegra."
  },
  {
    "phrase": "Nuestra presencia es firme y perpetúa, aun cuando tus experiencias cotidianas sean inestables, confía. No puedes esperar crear paz y armonía en el mundo hasta haber encontrado paz y armonía en tu interior."
  },
  {
    "phrase": "Cuando te expresas con palabras dulces te haces un regalo a ti y a los demás. Estás en este mundo para llevarle el bien."
  },
  {
    "phrase": "Tu nivel de vibración de tu energía se eleva cuando tu cuerpo y tu mente están en paz y armonía. Respira profundamente y encuentra es paz que está más allá de toda comprensión."
  },
  {
    "phrase": "Todo es vibración, los colores, los números, los aromas te ayudan a armonizar y equilibrar tu energía. Cuentas con la ayuda del universo para sanar. Cuentas conmigo."
  },
  {
    "phrase": " Honra y bendice tu sensibilidad como el regalo que en verdad es y respeta tu intuición. Cuando sientes tensión, busca dentro de ti y averigua qué es aquello contra lo que luchas que te produce esa tensión."
  },
  {
    "phrase": "Poco a Poco tu sensibilidad se incrementa y puedes llenar tu espacio de fragancias y observar la influencia positiva. Cuando estás en este estado de conciencia puedes gozar del cielo en la tierra."
  },
  {
    "phrase": "Así como absorbes energía positiva, puedes absorber energía de baja vibración, limpia tu energía con nuestra ayuda. Repite: Soy UNO con la divinidad, hasta que tenga sentido para ti."
  },
  {
    "phrase": "Protégete desde la certeza de que estás rodeado por energías de luz y amor, sin miedo. Los procesos naturales han de surgir para producir cambios. Todo es para bien. "
  },
  {
    "phrase": "Apréciate, estás haciendo un buen trabajo das con amor y recibes con gratitud. ¡Felicidades! Estás inmunizado ante cualquier problema del mundo exterior."
  },
  {
    "phrase": "Tu talento, es la herramienta de Dios te dio para conducirte a casa de nuevo con paz y alegría. Al avanzar hacia lo nuevo se consciente de la divinidad en tu interior."
  },
  {
    "phrase": "Explorar nuevos métodos para expresarte con creatividad, intenta cosas nuevas y goza la experiencia. La vida es una continua invitación para crear."
  },
  {
    "phrase": "Quiérete por lo que eres y sé amable contigo. Cuando tú te cuidas, el universo te cuida. Busca en ti la gracia y entra en la sintonía del amor."
  },
  {
    "phrase": "Llámanos, pide que te llevemos en sueños o mientras meditas a un templo etéreo y siente como te reanimas. Comparte lo que guardas en tu interior, estás libre de ser juzgado."
  },
  {
    "phrase": "No te dejes engañar por las falsas ideas que el ego refleja. La opinión de los demás no importa, tu esencia es divina. Si piensas que esto es complicado, cambia de actitud, cree y confía."
  },
  {
    "phrase": "El amor de Dios, te protege a ti y a tus seres queridos, no hay nada que temer. Todo lo que necesites está dentro de ti esperando revelarse."
  },
  {
    "phrase": "Los ángeles sabemos que en tu futuro hay muchos regalos y momentos felices. Vive el presente y mira la cara luminosa de la vida."
  },
  {
    "phrase": "Todo está bien, los ángeles te amamos y protegemos. Siempre estamos a tu lado. ¡Llámanos! Haz que tu fe permanezca fuerte e inquebrantable."
  },
  {
    "phrase": "Trabajamos de tu lado para ayudarte a eliminar las creencias que impiden que tengas una relación de pareja sana. Reconócete en el otro y abre tu corazón."
  },
  {
    "phrase": "Conforme aceptas los regalos diarios del universo, estos se multiplican, estás listo para manifestar abundancia. No hay virtud en el ser pobre."
  },
  {
    "phrase": "Confía en la bondad de los demás, tus relaciones sanan cuando dejas que fluyan con verdad y perdón. Cuentas con nuestra ayuda. "
  },
  {
    "phrase": "La fuerza del amor es la más poderosa del universo. Pide al arcángel Chamuel que te ayude a encontrarla. Cuando liberas más amor en el mundo, se produce una maravillosa sanación."
  },
  {
    "phrase": "No necesitas luchar contra nada, sólo fluye, libérate de los problemas que te causan tensión, entréganoslos. No te resistas al cambio, la bellota se convierte en un fuerte roble."
  },
  {
    "phrase": "Tu alma fue hecha con amor puro, Dios y los ángeles son puro amor. A medida que aceptes que eres hijo del amor y estás hecho de amor tu vida entera se llenará de gozo y gratitud."
  },
  {
    "phrase": "Perdónate, no has hecho nada malo, cambia la culpa y los remordimientos por el amor divino. La paz sea contigo."
  },
  {
    "phrase": "Reconoce lo maravilloso que realmente eres, ningún adjetivo puede describirte totalmente, fuiste creado a imagen de Dios. Deja salir tu pureza, sé cómo un niño y maravíllate de la vida."
  },
  {
    "phrase": "Dios satisface tus necesidades abundante y continuamente. El bien que recibes no se le quita a nadie. Es un ciclo perfecto. La vida no requiere de esfuerzo, una flor no lucha para abrirse ante los rayos del sol. Fluye. "
  },
  {
    "phrase": "Todo lo que puedes necesitar proviene del Dios que hay en tu interior, eres fuente inagotable de bienestar, recuérdalo. Tú estado mental depende de ti. Se co-creador de la vida que esperas. "
  },
  {
    "phrase": "Para saber cuál es tu misión de vida, sólo necesitas escuchar la sabiduría de tu corazón y utilizar tu talento. Allí reside el gozo y la fuerza de poder interior."
  },
  {
    "phrase": "Tienes una misión que es útil y necesaria para la misión universal. Sólo se puede construir un templo fuerte con cimientos sólidos, tú eres un buen cimiento. "
  },
  {
    "phrase": "Muchas veces mejorar tu vida implica hacer cambios sanos, identifica que es lo que bloquea tu bienestar y actúa. Quizá no siempre entiendas por qué te encuentres donde estás, pero puedes estar seguro de que hay una buena razón."
  },
  {
    "phrase": "Cuando eres feliz, sacas lo mejor de ti y de los demás. Elige ser feliz. Sé cómo un niño pequeño ahora, libre y lleno de júbilo, vive el eterno presente ahora."
  },
  {
    "phrase": "Los ángeles estamos en constante comunicación contigo. Atiende tus corazonadas y observa nuestras señales. D gracias por todo lo que tienes, estás atrayendo lo mejor hacia ti."
  },
  {
    "phrase": "Tu poder está en tu voluntad y tiene apoyo de nuestra asistencia y guía, no lo cedas, toma el control de tus emociones. Toda limitación proviene del temor."
  },
  {
    "phrase": "Hoy es un buen día para dedicar tiempo para ti, te ayudaremos a encontrar actividades divertidas y satisfactorias."
  },
  {
    "phrase": "No temas nada y camina con absoluta fe y confianza haciendo lo que sabes que está bien e ignora toda oposición. Escucha tu corazón. "
  },
  {
    "phrase": "El ego separa, su vibración es muy baja y te lleva de paseo a la oscuridad, reconoce la divinidad en los demás. El pesimismo debilita, crea un mundo de belleza, paz y armonía instruyendo a tu mente a pensar positivo."
  },
  {
    "phrase": "Toma tus decisiones con claridad, pide nuestra asistencia y que cada paso te lleve en el camino de la luz. Cuanto más amor y buena voluntad pongas en tu proceso, mejores respuestas obtendrás."
  },
  {
    "phrase": "Date tiempo para disfrutar las actividades que te apasionan y dedícales tiempo, elevarán tu vibración energética. En la medida que aprendas a compartir tus talentos y lo que te apasiona, aumentará tu gracia."
  },
  {
    "phrase": "Entre las decisiones que tomes para pasar el tiempo, elige las que te lleven a la paz, piensa positivo. La dicha que compartes, se refleja en las almas que te rodean. Te amo."
  },
  {
    "phrase": "Cuando piensas en rendirte es porque aparecen miedos y presiones que quieres evitar. Responsabilízate de tu felicidad, anda con fe y confianza, jamás te abandono."
  },
  {
    "phrase": "Tú conoces qué te lleva a la felicidad, concéntrate en la guía que te dan tus emociones positivas. Libera el pasado y ve este día como nuevo y glorioso."
  },
  {
    "phrase": "El amor libera a los amados. El amor nunca es posesivo. La libertad del espíritu es esencial para ti y los que te rodean. Ama en libertad"
  },
  {
    "phrase": "Para recordar el abrazo del cielo, sólo abraza tu interior. Dios está en ti, como en el interior de los demás. Utiliza la gratitud como una fuerza espiritual fundamental."
  },
  {
    "phrase": "El amor libera a los amados. El amor nunca es posesivo. La libertad del espíritu es esencial para ti y los que te rodean. Ama en libertad"
  },
  {
    "phrase": "Para recordar el abrazo del cielo, sólo abraza tu interior. Dios está en ti, como en el interior de los demás. Utiliza la gratitud como una fuerza espiritual fundamental."
  },
  {
    "phrase": "Aquello en lo que decides concentrarte es el reflejo de lo que deseas para tu vida. Elige felicidad, amor, bondad."
  },
  {
    "phrase": "La naturaleza tiene un poder sanador, sal a dar un paseo, respira aire fresco y siente como sube tu energía. Mira la abundancia de la naturaleza, la belleza que te rodea y reconoce a Dios en todo."
  },
  {
    "phrase": "Lo mejor que puedes hacer ante una situación dolorosa física, mental o emocional, es mantener una actitud positiva. Cuando estás inmerso en el caos busca la guía en tu interior, escucha tu intuición. "
  },
  {
    "phrase": "Los ángeles aplaudimos todo paso que das a favor de tu plan divino. ¿Qué vas a hacer hoy? Aprende a reírte de ti mismo, especialmente cuando veas que te estás poniendo demasiado serio. "
  },
  {
    "phrase": "Usa un lenguaje sanador, lleno de amor y energía positiva. Cuando lo usas sanas tú y sanan los demás. Esta vida plena es constante, no se puede hacer en tiempo parcial."
  },
  {
    "phrase": "Tu energía de amor fluye por todo tu cuerpo y puedes usarla a voluntad, para bien tuyo y de los demás. Fluye con la corriente, no contra ella. Muéstrate más flexible."
  },
  {
    "phrase": "La próxima vez que te encuentres sufriendo carencias de algún tipo, no le eches la culpa a las circunstancias, a tus condiciones o a tu situación: en vez de eso, tómate tiempo para mirar en tu interior y ver qué es lo que ocasiona esa obstrucción dentro de ti y llámanos, estamos a tu lado."
  },
  {
    "phrase": "Date permiso de ver la situación desde otro punto de vista, escucha tu intuición y ve como llega la respuesta. Deja de intentar ser como otra persona, siendo tú mismo eres suficiente."
  },
  {
    "phrase": "Agradece al arcángel Miguel por los ángeles que ha enviado para guiarte desde siempre. La profunda relación con tus ángeles crea milagros. Llámanos."
  },
  {
    "phrase": "Cuando agradeces como eres, alabas la obra del gran creador. Tú eres perfecto. Ten fe en ti mismo y en tu habilidad de hacer las cosas con la ayuda divina. Tu vida se irá realizando en perfecta armonía. "
  },
  {
    "phrase": "El amor divino está en todas partes, incluso dentro de ti y de las personas que encuentres hoy. Tal vez tengas grandes responsabilidades, pero no estás sola, cuentas con la ayuda del cielo."
  },
  {
    "phrase": "Hemos estado juntos desde siempre, soy tu ángel de la guarda y estoy muy orgulloso de ti. Lo viejo queda atrás ante la luz de la novedad gloriosa. Te amo."
  },
  {
    "phrase": "Podemos ayudarte sólo si nos lo pides, es importante que recuerdes llamarnos. Pide nuestra ayuda sin restricción alguna, no juzgamos, es nuestra misión ayudarte."
  },
  {
    "phrase": "Regálate un día de paz, siente la serenidad que habita dentro de ti y disfruta los resultados. Deja atrás el ayer y no pierdas más tiempo deteniéndote en los errores, puedes echar a perder tu vida. "
  },
  {
    "phrase": "Descansar es una inversión que haces en ti y produce abundantes regalías. Es un tiempo hermoso para ti. Vive el milagro de estar en perfecta paz."
  },
  {
    "phrase": "La vida al igual que el amor, es simple. No fortalezcas al ego y sus bloqueos. No interfieras en el camino de otras personas. Es importante que cada quien encuentre su propio camino."
  },
  {
    "phrase": "Al tomar decisiones pide asistencia a los ángeles de la sabiduría y esto te ayudará a reducir cargas de trabajo. La vida es una escuela y estás aprendiendo constantemente."
  },
  {
    "phrase": "Permite que tu belleza interna se manifieste en tu exterior, eres un ser hermoso por dentro y por fuera. Tu cuerpo es amor de forma visible, vibra en salud."
  },
  {
    "phrase": "Tú eres un increíble regalo para los demás, envuelto en alegría y con un hermoso moño de felicidad. Si quieres lograr hacer bien lo que estás haciendo, aprende a amarlo y a hacerlo con alegría."
  },
  {
    "phrase": "Que todas las cosas coincidan perfectamente en tu vida requiere de la magia del cielo y tu paciencia. Confía en el tiempo divino."
  },
  {
    "phrase": "Vive y se consiente de tu presente, aprecia cada segundo, fíjate en los detalles y goza la experiencia, a estas alturas ya sabes que estoy contigo siempre. Te amo."
  },
  {
    "phrase": "Estás rodeado del afecto del cielo, puedes hacer todas las cosas cuando tu fe y confianza están puestas en la divinidad en tu interior."
  },
  {
    "phrase": "El miedo es la base de los problemas de las relaciones, no cedas tu voluntad, nadie te pueda quitar lo que Dios te dio. Cuando hay amor desaparece todo temor, odio, celos, envidia y codicia."
  },
  {
    "phrase": "Las cualidades de los demás las puedes observar con la mente y el corazón abiertos, Sólo tu puedes vivir tu propia vida."
  },
  {
    "phrase": "Los ángeles estamos conectados a Dios, a ti y a toda la creación. Todos estamos conectados. La vida se puede volver divertida, es continuo movimiento."
  },
  {
    "phrase": "Para fortalecerte trabaja estrechamente en colaboración con el cielo. Tienes toda la ayuda que necesitas al solicitarla. En la quietud encuentras la paz y tu fortaleza."
  },
  {
    "phrase": "Tu sensibilidad se eleva cuando transitas por tu sendero espiritual. Sé dulce contigo. No importa el caos y la confusión que existan a tú alrededor o el ruido externo que pueda haber. Mantén tu paz."
  },
  {
    "phrase": "Deja ir el pasado, la manera que enfrentas el pasado determina lo que vas a atraer al futuro. La belleza de la vida está rodeándote, apréciala. "
  },
  {
    "phrase": "Al liberar las huellas dolorosas de tu pasado, decidiste aceptar el aprendizaje de la experiencia y seguir trabajando en ti. Tienes en tus manos un inmenso poder, asegúrate de utilizarlo para bien."
  },
  {
    "phrase": "Encuentra bendiciones y regalos en todo, no te dejes llevar por las apariencias. El amor todo lo envuelve, mantén un propósito, es importante saber hacia dónde te diriges."
  },
  {
    "phrase": "Recibe el cariñoso abrazo que te estoy dando en este momento, como tú ángel reconozco lo valioso que eres, sin importar lo distinto que parezcas. Sé tú mismo."
  },
  {
    "phrase": "Ama el bienestar que reside en el exterior de todos los que te rodean, sé un ángel en la tierra. Si en el exterior hay conflictos, busca tu puerto de paz."
  },
  {
    "phrase": "Todo tiene un orden perfecto, aunque de repente no lo veas, fuiste creado para cumplir tu misión divina. Ninguna tarea o acción es pequeña o insignificante."
  },
  {
    "phrase": "Exprésate como sientas que debas hacerlo, disfruta la creatividad que proviene de ser tú mismo. De ti depende como va a ser tu día."
  },
  {
    "phrase": "Tu autencidad te permite brillar con toda tu luz, exprésate con libertad, confianza y alegría. Levanta tu corazón, tu vida es una alabanza que glorifica a Dios."
  },
  {
    "phrase": "Envía los temores relacionados con el dinero a la llama de la luz y el amor. Dios quiere abundancia para todos. Sólo cree y confía y observa como sucede milagro tras milagro. "
  },
  {
    "phrase": " Tu belleza, tu poder y tu luz son más fuertes cuando estás lleno de risa y alegría. Afínate eres una nota armoniosa que convierte la vida en una hermosa melodía."
  },
  {
    "phrase": "Pide nuestra ayuda para atraer a tu mundo personas amables y generosas. ¡Eres un ganador! No cedas ante la apariencia de que hay un obstáculo que no puedes vencer."
  },
  {
    "phrase": "Expresa aprecio a tus seres queridos, el regalo que les das es un regalo para ti. Habla hoy con un ser querido. Este acto magnifica tu paz, tranquilidad y realización."
  },
  {
    "phrase": "Cero quejas, esto manifiesta que has cedido tu poder a alguien, eres un ser de luz, jamás una víctima. Tus pensamientos de abundancia determinan si tus necesidades van a estar cubiertas."
  },
  {
    "phrase": "Permite que el tranquilo espíritu de la naturaleza te calme y reviva, toda la creación fue diseñada para ayudarte. Cuando piensas como pobre, eres pobre, recuerda pensar en términos de prosperidad."
  },
  {
    "phrase": "Que bendecir sea tu ejercicio favorito, envía bendiciones a todos en silencio sin motivo. Esta energía viene del cielo. Nada de lo que emprendas es imposible."
  },
  {
    "phrase": "No puedes decir que te amas y odiar a tus semejantes, porque el amor y el odio son como el aceite y el agua: no se mezclan. Todos somos uno."
  },
  {
    "phrase": "Provienes de un linaje divino, honra a tus ancestros y recibe la lluvia de bendiciones que tienen para ti. Recuerda eres un hijo del amor."
  },
  {
    "phrase": "Cambia toda preocupación por fe, da gracias por los cambios rápidos, y cambia con los cambios. Todo es para bien, por eso no tengas temor y sigue adelante con júbilo."
  },
  {
    "phrase": "Honra tu sabiduría interna, tus ideas vienes de la misma fuente que la de los humanos más sabios. Cuando tomes decisiones, inspírate en el Dios en tu interior."
  },
  {
    "phrase": "Permite que el tranquilo espíritu de la naturaleza te calme y reviva, toda la creación fue diseñada para ayudarte. Deposita todas tus preocupaciones en nuestras manos, las llevaremos gustosos ante Dios."
  },
  {
    "phrase": "Tus expectativas determinan qué ves y qué vives. Espera siempre lo mejor. Jamás te limites o creas que no debieras esperar demasiado."
  },
  {
    "phrase": "Los remordimientos y errores del pasado se eliminan cuando te pones en las manos de Dios. Su voluntad es tu perfección y esta cualidad permanece en tu corazón."
  },
  {
    "phrase": "Mantén siempre pensamientos de prosperidad y abundancia, eso pone en marcha las fuerzas del universo a tu favor, provocando que así sea. Cuanto más positivo seas, con mayor rapidez se manifestarán tus deseos."
  },
  {
    "phrase": "Pide y se te dará, para Dios no hay límites. Te sorprenderá la frecuencia con que el universo te dice que sí. La vida es buena contigo porque aprecias todo lo que tienes."
  },
  {
    "phrase": "Lo viejo tiene que irse para que llegue lo nuevo, haz cambios saludables en tu vida y las oportunidades llegarán. El amor es la clave."
  },
  {
    "phrase": "Da un paso a la vez en el logro de tu meta, nosotros estamos de tu lado, todo tiene su tiempo perfecto. Cuando sientas una llamada a actuar, hazlo, a través de la intuición te estamos guiando."
  },
  {
    "phrase": "En el pasado te preocupaste por muchas experiencias y ahora puedes ver que todo fue para bien. Toma la determinación de no cometer la misma falta dos veces."
  },
  {
    "phrase": "Concéntrate en tus deseos, elige aprender cada experiencia y no te distraigas de tu objetivo. Tu mente es ágil y poderosa. Tu actitud entera ante la vida es muy importante."
  },
  {
    "phrase": "Cuando eliges vivir estupendamente a pesar de las apariencias, eres un reflejo del cielo aquí en la tierra. A medida que el orden divino entra en tu vida el caos sale volando por la ventana."
  },
  {
    "phrase": "El universo está en constante expansión y es abundante. Dile que si a la abundancia. Cuando mantienes tu vibración alta, todo está bien."
  },
  {
    "phrase": "Establece límites sanos, eres una persona sensible, cariñosa y considerada que no quiere lastimar a nadie. Encuentra auténtico gozo en el servicio a los demás, sin dejar de ser tú."
  },
  {
    "phrase": "Tus oraciones por otras personas son poderosas y sanadoras. Practica no juzgarte, ni a los demás. Camina en la luz y la verdad. "
  },
  {
    "phrase": "Relájate con la certeza de que todo va de acuerdo con tu plan divino, ten paciencia. Aprende a vivir y dejar vivir."
  },
  {
    "phrase": "Ama y cuida de tu cuerpo a cambio recibirás vitalidad y energía elevada para disfrutar tu vida."
  },
  {
    "phrase": "Cuando sobrevenga algo no armonioso, mira alrededor y observa cómo puedes cambiarlo."
  },
  {
    "phrase": "Aprende a aceptar los halagos con gracia y agradecimiento, está bien que te reconozcan. Tienes una inmensidad por dar."
  },
  {
    "phrase": "Reconoce las experiencias repetitivas que has tenido, haz los cambios positivos que dicta tu corazón para que no se repitan. Bendice, agradece y goza la prueba superada."
  },
  {
    "phrase": "Eres un alma sabia, confía en tus decisiones, tienes derecho a ser feliz. Sé generoso contigo mismo, da desde el corazón y ábrete a recibir los regalos que acompañan este principio."
  },
  {
    "phrase": "El trabajo silencioso de crear más amor en el mundo es parte de tu misión, es un gran trabajo. Empieza por ti."
  },
  {
    "phrase": "El amor, el amor busca siempre el bien, el amor, el amor no deja de ser, convierte tus sueños en realidad, ama y el mundo entero cambiará."
  },
  {
    "phrase": "Cuando eres honesto contigo, disfrutas de relaciones armoniosas. Sé tú mismo. No resistas el mal, véncelo con el bien."
  },
  {
    "phrase": "Siempre has sido amado y querido por ser quien eres. Los ángeles valoramos tu integridad. Tú tienes algo propio que dar, algo que nadie puede dar en tu lugar y ese don es necesario en nuestro mundo. "
  },
  {
    "phrase": "Cuando convives con la naturaleza te sientes renovado, pues la energía del aire, el sol y los árboles te rodea y te da su aliento. Aprende a ser sensible y a adaptarte."
  },
  {
    "phrase": "Tienes muchos dones que compartir, comenzando por tu presencia en el planeta. Cuando tu corazón está rebosante de paz y amor lo irradias alrededor."
  },
  {
    "phrase": "Cuando lo das todo, recibes todo, elimina el apego de tu vida y te sentirás librado para gozar tu grandeza total. Te amo."
  },
  {
    "phrase": "Tienes la entera libertad de adoptar la actitud que gustes, nosotros respetamos tu libre albedrío, la única regla es asumir las consecuencias de tus actos. Sin importar tu decisión tus ángeles te acompañamos."
  },
  {
    "phrase": "Cuando te expresas de manera auténtica, emites un arcoíris de energía altamente atractivo. Espera eventos maravillosos no en el futuro, ahora mismo."
  },
  {
    "phrase": "Aún cuando no estés consciente, siempre estás inmerso en el amor divino. Tu conexión con el cielo jamás se rompe. Hazte consciente de tu grandeza y actúa para bien tuyo y de los demás. Tiempo de un gran propósito."
  },
  {
    "phrase": "Perdónate por lo que crees que hiciste o no hiciste, sólo ámate, tú eres hijo amado de Dios. Enfócate en tu interior, el amor crea vida eterna y abundante."
  },
  {
    "phrase": "Mírate como te ve Dios, como un ser perfecto sin importar la ilusión del exterior. Con la luz no se negocia. Ríndete a la luz y vive tu divinidad."
  },
  {
    "phrase": "La sabiduría infinita de la mente de Dios, está unida a la tuya, todas las respuestas estás en tu interior. Recurre al silencio y deja que Dios actúe a través de ti."
  },
  {
    "phrase": "Equilibra la diversión y la labor, es muy importante alcanzar el equilibrio en el juego de la vida. Mi amor te cubre y te rodea, eres un ganador. ¡Juega!"
  },
  {
    "phrase": "Las energías de dar y recibir se equilibra, esfuérzate en tus proyectos, sé generoso y los resultados serán poderosos. Nadie puede vivir para sí mismo y ser feliz. Concibe la luz en tu corazón."
  },
  {
    "phrase": "Recuerda que siempre estás en armonía con los ángeles. Tú estás en la tierra porque el mundo necesita tu talento. Nada podrá perturbarte cuando hay paz en tu interior."
  },
  {
    "phrase": "Siempre eres digno de ser amado, a pesar de los errores, a pesar de tu conducta. Conocemos tu verdad divina."
  },
  {
    "phrase": "Puedes corregir y aprender de los errores desde la sabiduría de tu corazón."
  },
  {
    "phrase": "Nosotros los ángeles podemos ayudarte a darle voz a tus sentimientos y actuar conforme a ellos. Podemos darte alas y la oportunidad para empezar de nuevo, nunca es tarde. "
  },
  {
    "phrase": "La Madre Divina, te cobija con su manto de estrellas. Estás protegido y eres profundamente amado. La energía de la Madre te nutre, te abraza, te apoya en todo momento."
  },
  {
    "phrase": "Recuerda que mereces la asistencia del cielo. Todo ser humano recibe ayuda cuando la solicita. El plan de nuestro padre-madre para ti es perfecto y se manifestará en el tiempo perfecto. Enciende una vela morada al ángel de la opulencia hoy."
  },
  {
    "phrase": "Ábrete a recibir los ángeles de la opulencia, la riqueza, el suministro y la abundancia están llegando a tu casa. No desgastes tu energía con pensamientos de duda."
  },
  {
    "phrase": "El propósito de tu vida es ser feliz. Cuenta con tus bendiciones y agradece lo que tienes, observa la diferencia. Lo mejor está esperándote."
  },
  {
    "phrase": "Libérate del miedo y la indecisión, es momento de actuar, estamos a tu lado. La vida es lo que haces de ella. Actúa."
  },
  {
    "phrase": "Tú manejas tu voluntad, no cesas tu poder a nadie. Escucha tu corazón y actúa en conciencia. La fe engendra fe. Deposita tu confianza en el universo."
  },
  {
    "phrase": "Un corazón feliz, sano, física y emocionalmente, permite que la luz de la alegría nutra tu alma. Comparte risas y bendiciones."
  },
  {
    "phrase": "Mereces todo el afecto que te otorga el cielo, no dudes ni un instante de lo valioso que eres. Mantente enfocado en tu meta, alinea mente, corazón y voluntad."
  },
  {
    "phrase": "Cuando el ego trate de disuadirte para que no alcances tu misión, escucha tu voz interior. El universo te apoya totalmente. Estamos a tu lado."
  },
  {
    "phrase": "Hoy el ángel de la navidad llega para entregarte salud, prosperidad, amor, paz y riqueza. Un corazón abierto y generoso atrae todo lo mejor."
  },
  {
    "phrase": "Cuando te sientes desanimado o cansado, los ángeles te sostenemos para que vuelvas a tu natural estado de felicidad. Descansa."
  },
  {
    "phrase": "Te mandamos señales y guía concreta para ayudarte a sacar provecho de los mensajes que enviamos a tu corazón. Permite que la divinidad obre a través de ti y produzca maravillas."
  },
  {
    "phrase": "Respira profundo y abre tu corazón, en este momento la luz más pura del universo llega a ti, permite que habite en ti y se expanda, iluminando tu vida y la de los tuyos."
  },
  {
    "phrase": "Los ángeles siempre hemos estado orgullosos de ti. Eres valioso, recibe los regalos amorosos del cielo. Salud, paz, amor, armonía, felicidad, riqueza, bondad…"
  },
  {
    "phrase": "Hay mucho amor intentando desplegarse, haz lo tuyo, date cuenta de que lo que te sucede como individuo se refleja en el mundo. Eres luz."
  },
  {
    "phrase": "Cuando crees que algo puede salir mal, te estás alejando del plan divino, donde todo es perfecto. Vive el presente, concéntrate en este maravilloso día sin temor, los ángeles estamos a tu lado."
  },
  {
    "phrase": "Permanece optimista, alegra y de buen humor todo el día y recoge tus recompensas. Actúa según el impulso de tu corazón, quizá sea algo diferente, la inocencia en tu interior ve las cosas diferentes."
  },
  {
    "phrase": "Dios es omnipresente, lo que significa que está en todas partes y en cada persona o cosa, reconócelo. En tu abuela, el delfín, tu expareja, en ti. Ámate."
  },
  {
    "phrase": "Bendice tu pasado, te ha dejado sabiduría, aprendizaje, fuerza, paciencia y amor. Honra tu linaje y agradece. Aprende a comprender y entenderás que todo es para bien. "
  },
  {
    "phrase": "Agradece y bendice tu pasado. Hay grandes oportunidades delante de ti, tus herramientas son un corazón lleno de amor, una coraza de fe, una mente positiva y un espíritu de fuego dispuesto a avanzar. Siempre estoy a tu lado. Te amo, desde siempre y para siempre. "
  }
]

var myDoc = app.activeDocument;

app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;
app.findChangeTextOptions.caseSensitive = true;
app.findChangeTextOptions.includeFootnotes = false;
app.findChangeTextOptions.includeHiddenLayers = false;
app.findChangeTextOptions.includeLockedLayersForFind = false;
app.findChangeTextOptions.includeLockedStoriesForFind = false;
app.findChangeTextOptions.includeMasterPages = false;
app.findChangeTextOptions.wholeWord = true;

shuffle (frases);

for (i = 1; i <= 365; i++) {

    $.writeln (frases[i].phrase)
    app.findTextPreferences.findWhat = "FBOTIEL"+i;
    app.changeTextPreferences.changeTo = frases[i-1].phrase;
    myDoc.changeText();
    
    }

app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;

