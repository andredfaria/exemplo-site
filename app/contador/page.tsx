"use client";

import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Calculator,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário",
      content:
        "Excelente profissional. Trouxe organização e eficiência para minha empresa.",
      company: "Silva & Associados",
    },
    {
      name: "Ana Santos",
      role: "Diretora Financeira",
      content:
        "Serviço excepcional e atendimento personalizado. Recomendo fortemente.",
      company: "Tech Solutions",
    },
    {
      name: "Roberto Lima",
      role: "Empreendedor",
      content: "Transformou nossa gestão financeira com soluções inovadoras.",
      company: "Lima Empreendimentos",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            Contabilidade Moderna para seu Negócio
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Soluções contábeis personalizadas para impulsionar seu sucesso
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto transition-all">
            Fale Conosco <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Sobre Nós</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Escritório moderno"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Experiência e Inovação em Contabilidade
              </h3>
              <p className="text-gray-600 mb-6">
                Com mais de 15 anos de experiência, oferecemos soluções
                contábeis modernas e eficientes para empresas de todos os
                portes. Nossa equipe de profissionais qualificados está sempre
                atualizada com as últimas mudanças na legislação e tecnologias
                do setor.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Confiabilidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span>Experiência</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-primary" />
                  <span>Precisão</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <span>Conhecimento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="w-8 h-8" />,
                title: "Contabilidade Empresarial",
                description:
                  "Gestão contábil completa para empresas, incluindo balanços, demonstrações e relatórios gerenciais.",
              },
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Consultoria Fiscal",
                description:
                  "Planejamento tributário estratégico para otimização fiscal e redução de custos.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Departamento Pessoal",
                description:
                  "Gestão completa de folha de pagamento, admissões, demissões e obrigações trabalhistas.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Depoimentos</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6">
                {testimonials[activeTestimonial].content}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[activeTestimonial].role} -{" "}
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeTestimonial
                          ? "bg-primary"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-10 bg-gray-50">
        <div className="container mx-auto px-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            Entre em Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>contato@contabilidade.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Rua Asssis Figueiredo, 1000 - São Paulo, SP</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sobre Nós</h3>
              <p className="text-gray-400">
                Oferecemos soluções contábeis modernas e eficientes para
                empresas de todos os portes, com foco em qualidade e excelência.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-white transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="hover:text-white transition-colors"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Horário de Atendimento
              </h3>
              <p className="text-gray-400 mb-2">Segunda a Sexta</p>
              <p className="text-gray-400">09:00 - 18:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Contabilidade Moderna. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
