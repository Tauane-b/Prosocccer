const disponibilidade = {
  segunda: [],
  terca: ['21:30-23'],
  quarta: [],
  quinta: ['20-21:30'],
  sexta: ['20-21:30'],
  sabado: [
    '12:30-14:00',
    '14:00-15:30',
    '15:30-17:00',
    '17:00-18:30',
    '18:30-20:00',
    '20:00-21:30',
    '21:30-23:00'
  ],
  domingo: ['09:30-10:30', '10:30-12:00']
};
  const nomesDias = {
    segunda: 'Segunda-feira',
    terca: 'Terça-feira',
    quarta: 'Quarta-feira',
    quinta: 'Quinta-feira',
    sexta: 'Sexta-feira',
    sabado: 'Sábado',
    domingo: 'Domingo'
  };

  // Horários padrão para os selects (pode ajustar conforme quiser)
  const horariosPadrao = {
    '20-21:30': '20:00 às 21:30',
    '21:30-23': '21:30 às 23:00',
    '12:30-14:00': '12:30 às 14:00',
    '14:00-15:30': '14:00 às 15:30',
    '15:30-17:00': '15:30 às 17:00',
    '17:00-18:30': '17:00 às 18:30',
    '18:30-20:00': '18:30 às 20:00',
    '07:30-09:00': '07:30 às 09:00',
    '09:00-10:30': '09:00 às 10:30',
    '10:30-12:00': '10:30 às 12:00',
    '09:30-10:30': '09:30 às 10:30',
    '10:30-12:00': '10:30 às 12:00'
  };

  const form = document.getElementById('agenda-form');

  Object.keys(disponibilidade).forEach(dia => {
    const div = document.createElement('div');
    div.classList.add('dia');

    const label = document.createElement('label');
    label.htmlFor = dia;
    label.textContent = nomesDias[dia];
    div.appendChild(label);

    const select = document.createElement('select');
    select.id = dia;
    select.name = dia;

    // Sempre adiciona Indisponível
    const optionIndisponivel = document.createElement('option');
    optionIndisponivel.value = '';
    optionIndisponivel.textContent = 'Indisponível';
    select.appendChild(optionIndisponivel);

    // Adiciona os horários disponíveis para o dia
    const horariosDia = disponibilidade[dia];
    horariosDia.forEach(hora => {
      const option = document.createElement('option');
      option.value = hora;
      option.textContent = horariosPadrao[hora] || hora;
      option.selected = true; // já seleciona o horário disponível
      select.appendChild(option);
    });

    div.appendChild(select);

    // Status
    const status = document.createElement('span');
    status.classList.add('status');
    status.id = `status-${dia}`;
    div.appendChild(status);

    form.appendChild(div);

    // Atualiza o status de acordo com o valor selecionado
    function atualizarStatus() {
      if (select.value) {
        status.textContent = 'Disponível';
        status.classList.add('disponivel');
        status.classList.remove('indisponivel');
      } else {
        status.textContent = 'Indisponível';
        status.classList.add('indisponivel');
        status.classList.remove('disponivel');
      }
    }
    select.addEventListener('change', atualizarStatus);
    atualizarStatus();
  });