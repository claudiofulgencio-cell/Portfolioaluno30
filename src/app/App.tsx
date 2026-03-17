export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#e9c5fa' }}>
      {/* Header */}
      <header 
        className="text-white py-16 px-5 text-center"
        style={{ 
          background: 'linear-gradient(120deg, #9a4fc2, #871dbf)'
        }}
      >
        <h1 className="mb-3" style={{ fontSize: '42px', fontWeight: 600 }}>
          ꒰ 𝒞𝓁𝒶𝓊𝒹𝒾𝑜 𝒟𝒾𝓃𝒾𝓏 𝐹𝓊𝓁𝑔𝑒𝓃𝒸𝒾𝑜 ꒱
        </h1>
        <p className="opacity-90" style={{ fontSize: '20px' }}>
          Desenvolvedor Junior ⧽ Aluno de Desenvolvimento de Sistemas ⧽ Trabalho Back-end
        </p>
      </header>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-5 py-12">
        
        {/* Sobre Mim Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="mb-6 text-center" style={{ color: '#ac1bfa', fontSize: '32px' }}>
            Sobre Mim
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              ⤷ Sou aluno do curso de Desenvolvimento de Sistemas, aprendo programação FRONT-end e BACK-end
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              ۶ৎ Adoro explorar novas oportunidades e aprender mais sobre programação!!
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              ۶ৎ Estudo no Colégio Estadual Parigot de Souza
            </p>
          </div>
        </section>

        {/* Biografia / Experiência Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="mb-6 text-center" style={{ color: '#ac1bfa', fontSize: '32px' }}>
            Biografia & Experiência
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="pb-4 border-b border-gray-200">
              <h3 style={{ color: '#871dbf', fontSize: '20px', marginBottom: '12px' }}>
                Formação Acadêmica
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Atualmente cursando Desenvolvimento de Sistemas no Colégio Estadual Parigot de Souza, 
                onde tenho a oportunidade de aprender sobre tecnologias modernas e práticas de desenvolvimento 
                de software.
              </p>
            </div>

            <div className="pb-4 border-b border-gray-200">
              <h3 style={{ color: '#871dbf', fontSize: '20px', marginBottom: '12px' }}>
                Habilidades Técnicas
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Conhecimento em desenvolvimento Front-end e Back-end. Experiência com ferramentas 
                de desenvolvimento como VS Code. Estou constantemente aprimorando minhas habilidades 
                e buscando aprender novas tecnologias.
              </p>
            </div>

            <div className="pb-4">
              <h3 style={{ color: '#871dbf', fontSize: '20px', marginBottom: '12px' }}>
                Objetivos Profissionais
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Como desenvolvedor júnior, busco oportunidades para crescer na área de desenvolvimento 
                de software, especialmente em projetos Back-end. Estou sempre aberto a novos desafios 
                e aprendizados que possam me tornar um profissional melhor.
              </p>
            </div>
          </div>
        </section>

        {/* Habilidades Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="mb-6 text-center" style={{ color: '#ac1bfa', fontSize: '32px' }}>
            Habilidades em Desenvolvimento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-5 rounded-lg" style={{ background: 'rgba(218, 150, 255, 0.1)' }}>
              <h3 style={{ color: '#871dbf', fontSize: '18px', marginBottom: '8px' }}>
                Front-end
              </h3>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                HTML, CSS, JavaScript, Design Responsivo
              </p>
            </div>
            
            <div className="p-5 rounded-lg" style={{ background: 'rgba(218, 150, 255, 0.1)' }}>
              <h3 style={{ color: '#871dbf', fontSize: '18px', marginBottom: '8px' }}>
                Back-end
              </h3>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                Lógica de Programação, Estruturas de Dados, APIs
              </p>
            </div>
            
            <div className="p-5 rounded-lg" style={{ background: 'rgba(218, 150, 255, 0.1)' }}>
              <h3 style={{ color: '#871dbf', fontSize: '18px', marginBottom: '8px' }}>
                Ferramentas
              </h3>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                VS Code, Git, Controle de Versão
              </p>
            </div>
            
            <div className="p-5 rounded-lg" style={{ background: 'rgba(218, 150, 255, 0.1)' }}>
              <h3 style={{ color: '#871dbf', fontSize: '18px', marginBottom: '8px' }}>
                Soft Skills
              </h3>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                Trabalho em Equipe, Resolução de Problemas, Aprendizado Contínuo
              </p>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="mb-6 text-center" style={{ color: '#ac1bfa', fontSize: '32px' }}>
            ⊹ ࣪ ˖ Contato ☎
          </h2>
          <div className="space-y-3 text-center max-w-2xl mx-auto">
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              📞 (44) 999107929
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              📧 claudio.fulgencio@escola.pr.gov.br
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              💼 LinkedIn: seu perfil
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
              💻 GitHub: claudiofulgencio-cell
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer 
        className="text-white text-center py-6 mt-12"
        style={{ background: '#9a4fc2' }}
      >
        <p style={{ fontSize: '14px' }}>
          © 2026 - Claudio Fulgencio ᛝ Portfolio de Aluno, projeto de Fevereiro-Março ᛝ 😋
        </p>
      </footer>
    </div>
  );
}
