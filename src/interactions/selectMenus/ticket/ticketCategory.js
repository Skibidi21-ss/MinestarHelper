import {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
  MessageFlags,
} from 'discord.js';

export default {
  name: 'ticket_category',

  async execute(interaction) {
    const ticketType = interaction.values[0];

    const ticketTypes = {
      kupno: {
        title: 'Kupno moda',
        placeholder: 'Napisz, w jaki sposób chcesz kupić moda...',
      },

      problem: {
        title: 'Problem z modem',
        placeholder: 'Opisz problem i podaj wersję Minecrafta...',
      },

      inne: {
        title: 'Inne',
        placeholder: 'Napisz, w jakiej sprawie się kontaktujesz...',
      },
    };

    const selectedType = ticketTypes[ticketType];

    if (!selectedType) {
      await interaction.reply({
        content: '❌ Wybrano nieprawidłową kategorię.',
        flags: MessageFlags.Ephemeral,
      });

      return;
    }

    const modal = new ModalBuilder()
      .setCustomId(`create_ticket_modal:${ticketType}`)
      .setTitle(selectedType.title);

    const reasonInput = new TextInputBuilder()
      .setCustomId('reason')
      .setLabel('Opisz swoją sprawę')
      .setStyle(TextInputStyle.Paragraph)
      .setPlaceholder(selectedType.placeholder)
      .setRequired(true)
      .setMaxLength(1000);

    const row = new ActionRowBuilder().addComponents(reasonInput);

    modal.addComponents(row);

    await interaction.showModal(modal);
  },
};
