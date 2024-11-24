export const Hero = () => {
  return (
    <section className="flex flex-col items-baseline bg-blue-700 h-full px-6 md:px-16 py-16">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between">
        <h1 className="flex-1">
          Conectamos famílias com cuidadores profissionais de confiança.
        </h1>
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-blue-50 font-normal">
            Com base em uma cuidadosa seleção de profissionais, a Essencial
            Enfermagem emprega seleciona o cuidador mais adequado para cuidar de
            quem você ama. Em casa, no hospital ou em qualquer lugar pelo tempo
            que for preciso.
          </p>
          <button className="w-fit group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-blue-200">
            <div className="inline-flex h-12 translate-y-0 items-center justify-center bg-blue-50 px-6 text-blue-950 transition group-hover:-translate-y-[150%]">
              Contratar cuidador
            </div>
            <div className="absolute inline-flex h-12 translate-y-[100%] items-center justify-center bg-blue-700 px-6 text-blue-50 transition duration-300 group-hover:translate-y-0">
              Contratar cuidador
            </div>
          </button>
        </div>
      </div>

      {/* <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
        <div className="bg-blue-950 text-blue-50 p-4 md:p-16 flex flex-col gap-4 justify-center items-center sm:items-start">
          <div className="flex flex-col gap-2">
            <div className="text-5xl text-blue-500">+50</div>
            <div>Famílias atendidas</div>
          </div>
          <p className="hidden md:flex">
            Atendimento com uma equipe profissional dedicada ao bem estar e
            conforto do seu familiar.
          </p>
        </div>

        <Image
          src="/hero-img1.jpg"
          alt="Hero Image 1"
          width={1000}
          height={563}
          className="w-full h-full object-cover aspect-square"
        />

        <div className="bg-blue-950 text-blue-50 p-4 md:p-16 flex flex-col gap-4 justify-center items-center sm:items-start">
          <div className="flex flex-col gap-2">
            <div className="text-5xl text-blue-500">+15</div>
            <div>Anos de experiencia</div>
          </div>
          <p className="hidden md:flex">
            Desde 2009 a melhor experiência em atendimento domiciliar!
          </p>
        </div>

        <Image
          src="/hero-img2.jpg"
          alt="Hero Image 2"
          width={1000}
          height={563}
          className="w-full h-full object-cover aspect-square"
        />

        <Image
          src="/hero-img3.jpg"
          alt="Hero Image 3"
          width={1000}
          height={563}
          className="w-full h-full object-cover aspect-square"
        />

        <div className="bg-secondary text-primary font-medium p-4 md:p-16 flex flex-col gap-4 justify-center items-center sm:items-start">
          <div className="flex flex-col gap-2">
            <div className="text-5xl text-blue-500">+30</div>
            <div>Profissionais</div>
          </div>
          <p className="hidden md:flex">
            Mais de 30 profissionais qualificados.
          </p>
        </div>

        <Image
          src="/hero-img4.jpg"
          alt="Hero Image 4"
          width={1000}
          height={563}
          className="w-full h-full object-cover aspect-square"
        />

        <div className="bg-secondary text-primary font-medium p-4 md:p-16 flex flex-col gap-4 justify-center items-center sm:items-start">
          <div className="flex flex-col gap-2">
            <div className="text-5xl text-blue-500">+100</div>
            <div>Avaliações</div>
          </div>
          <p className="hidden md:flex">
            Mais de 100 avaliações auxiliando as famílias no planejamento dos
            cuidados com seus familiares.
          </p>
        </div>
      </div> */}
    </section>
  );
};
