<form method="POST" action="inscriptions.php">
    <label for="prenom">Prénom :</label>
    <input type="text" name="prenom" id="prenom" value="<?php echo htmlspecialchars($prenom ?? ''); ?>" />

    <br/>

    <label for="nom">Nom :</label>
    <input type="text" name="nom" id="nom" value="<?php echo htmlspecialchars($nom ?? ''); ?>" />

    <br/>

    <label for="age">Âge :</label>
    <input type="number" name="age" id="age" value="<?php echo htmlspecialchars($age ?? ''); ?>" />

    <br/>

    <label for="email">Email :</label>
    <input type="email" name="email" id="email" value="<?php echo htmlspecialchars($email ?? ''); ?>" />

    <br/>

    <label for="motdepasse">Mot de passe :</label>
    <input type="password" name="motdepasse" id="motdepasse" value="" />

    <br/>

    <button type="submit">S’inscrire</button>
    <button type="reset">Réinitialiser</button>
</form>
