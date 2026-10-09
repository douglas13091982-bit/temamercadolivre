export default function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* Payment methods */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Formas de pagamento</h3>
              <div className="flex flex-wrap gap-2">
                {['Visa', 'Master', 'Elo', 'Pix', 'Boleto', 'Amex'].map(method => (
                  <span key={method} className="bg-gray-100 px-3 py-1.5 rounded text-xs text-gray-600 font-medium">
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Atendimento</h3>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <i className="fas fa-clock text-gray-400"></i>
                  Seg a Sex: 9h às 18h
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-envelope text-gray-400"></i>
                  contato@uva7.com.br
                </li>
                <li className="flex items-center gap-2">
                  <i className="fab fa-whatsapp text-green-500"></i>
                  (47) 99999-9999
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Redes Sociais</h3>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-gray-100 hover:bg-pink-100 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-instagram text-pink-600"></i>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-facebook text-blue-600"></i>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-twitter text-blue-400"></i>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-youtube text-red-600"></i>
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                @uva7online
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#3483FA] rounded flex items-center justify-center">
                <span className="text-white text-xs font-black">U7</span>
              </div>
              <span className="text-sm text-gray-500">
                © 2024 Uva7 - Todos os direitos reservados
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-gray-600 transition-colors">Política de Privacidade</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-600 transition-colors">Termos de Uso</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-600 transition-colors">Trocas e Devoluções</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              CNPJ: 00.000.000/0001-00 | Joinville - SC | Loja Oficial no Mercado Livre
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
