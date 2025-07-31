<form method="post" action="">
    <label for="nom">Nom :</label>
    <input type="text" name="nom" id="nom" value="<?= htmlspecialchars($_SESSION['form_data']['nom'] ?? '') ?>">
    <?php if (!empty($erreurs['nom'])): ?><div class="erreur"><?= $erreurs['nom'] ?></div><?php endif; ?>

    <label for="email">Email :</label>
    <input type="email" name="email" id="email" value="<?= htmlspecialchars($_SESSION['form_data']['email'] ?? '') ?>">
    <?php if (!empty($erreurs['email'])): ?><div class="erreur"><?= $erreurs['email'] ?></div><?php endif; ?>

    <label for="age">Âge :</label>
    <input type="number" name="age" id="age" value="<?= htmlspecialchars($_SESSION['form_data']['age'] ?? '') ?>">
    <?php if (!empty($erreurs['age'])): ?><div class="erreur"><?= $erreurs['age'] ?></div><?php endif; ?>
    
    <label for="mdp">Mot de passe :</label>
    <input type="password" name="mdp" id="mdp">
    <?php if (!empty($erreurs['mdp'])): ?><div class="erreur"><?= $erreurs['mdp'] ?></div><?php endif; ?>
    <label for="site">Site web :</label>
    <input type="text" name="site" id="site" value="<?= htmlspecialchars($_SESSION['form_data']['site'] ?? '') ?>">
    <?php if (!empty($erreurs['site'])): ?><div class="erreur"><?= $erreurs['site'] ?></div><?php endif; ?>
        

    <input type="submit" value="Envoyer">
</form>
