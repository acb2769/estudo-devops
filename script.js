document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".task-check");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    function updateProgress() {
        const totalTasks = checkboxes.length;
        const completedTasks = document.querySelectorAll(".task-check:checked").length;
        
        // Calcula a porcentagem aproximada
        const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        // Atualiza a barra visualmente
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;

        // Modifica a mensagem de incentivo
        if (percentage === 0) {
            progressText.textContent = "Escolha um tópico para começar sua jornada!";
        } else if (percentage === 100) {
            progressText.textContent = "Parabéns! Você concluiu toda a grade do pipeline de estudos! 🚀";
        } else {
            progressText.textContent = `Boa! Você já concluiu ${completedTasks} de ${totalTasks} tópicos essenciais.`;
        }
    }

    // Adiciona o evento de escuta em todos os checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateProgress);
    });
});
