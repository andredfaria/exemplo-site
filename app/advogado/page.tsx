"use client";

import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const areas = [
  {
    title: "Direito Civil",
    description:
      "Contratos, Responsabilidade Civil, Direito de Família e Sucessões",
  },
  {
    title: "Direito Trabalhista",
    description: "Ações Trabalhistas, Acordos, Direitos do Trabalhador",
  },
  {
    title: "Direito Empresarial",
    description: "Contratos Empresariais, Societário, Recuperação Judicial",
  },
  {
    title: "Direito Imobiliário",
    description: "Contratos, Usucapião, Regularização de Imóveis",
  },
];

const equipe = [
  {
    name: "Advogado 1",
    oab: "OAB (XX) 123.456",
  },
  {
    name: "Advogado 2",
    oab: "OAB (XX) 654.321",
  },
  {
    name: "Advogado 3",
    oab: "OAB (YY) 987.654",
  },
  {
    name: "Advogado 4",
    oab: "OAB (ZZ) 321.987",
  },
  {
    name: "Advogado 5",
    oab: "OAB (XX) 456.789",
  },
  {
    name: "Advogado 6",
    oab: "OAB (YY) 789.654",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">
            Escritório de Advocacia X
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Excelência jurídica e compromisso com resultados. Sua segurança
            legal é nossa prioridade.
            <br></br>
            Desde 1968, OAB (XX) 1.234
          </p>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Card key={area.title} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((advogado) => (
              <Card key={advogado.name} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{advogado.name}</h3>
                <p className="text-muted-foreground">{advogado.oab}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato e Localização */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl">
              <Phone className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Telefone
              </h3>
              <p className="text-gray-600">(XX) 1234-5678</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl">
              <MapPin className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Endereço
              </h3>
              <p className="text-gray-600">Rua Exemplo, 123, Bairro X</p>
              <p className="text-gray-600">Cidade – XX</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl">
              <Mail className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                E-mail
              </h3>
              <p className="text-gray-600">contato@escritorioanonimo.com</p>
            </div>
          </div>
          <div className="mt-12 w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.818919894424!2d-46.5660869!3d-21.7872682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9dcef374cf4d7%3A0xebe13e3e8f4388ce!2sR.%20Assis%20Figueiredo%20-%20Centro%2C%20Po%C3%A7os%20de%20Caldas%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1738961029871!5m2!1spt-BR!2sbr"
              className="w-full h-full rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/5535991404064"
        target="_blank"
        className="fixed left-6 bottom-6 z-50"
      >
        <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
          <MessageCircle className="w-8 h-8" />
        </Button>
      </Link>
    </main>
  );
}
